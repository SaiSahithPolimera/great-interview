import { GoogleGenerativeAI } from "@google/generative-ai";
import discussionsData from "../scraper/discussions.json";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("API key is not set in the environment variables.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite-preview-06-17",
});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function extractJsonFromResponse(response) {
  const match = response.match(/\{[\s\S]*\}/);
  return match ? match[0] : null;
}

async function processSingleInterview(interviewData, index, total) {
  const content = interviewData?.data?.ugcArticleDiscussionArticle?.content;
  const title =
    interviewData?.data?.ugcArticleDiscussionArticle?.title ||
    "Untitled Interview";

  if (!content) {
    console.warn(
      `[${index + 1}/${total}] Skipping due to missing content: ${title}`
    );
    return null;
  }

  const prompt = `Analyze this interview experience post and extract structured data:

${content.slice(0, 30000)}

Return a strictly valid JSON object with this structure:

{
  "isInterview": boolean, // False if there is no interview experience or if the post is an offer breakdown or seeking advice or in waiting period or no updates from the interviewer or didn't hear back, False if the author is rejected by a company and did not specify the reason for rejection, False if no detailed breakdown of interview process
  "interviewQuestions": string[], // List all the interview questions mentioned in the POST, question must be as descriptive as possible if the question in available in the online platforms provide the link to the questions, provide contraints and sample testcases **USE MARKDOWN**
  "companyName": string, // fix company name if company name is not complete
  "currentPosition": string | null,
  "isStudent": boolean,
  "level": string | null,
  "location": string | null,
  "isOfferBreakdown": boolean, // True if the post is an offer breakdown of CTC, False if asking for advice based on the offer
  "offerBreakdown": string,
  "technologies": string[], // Empty if isInterview is false
  "targetPosition": string,
  "isSystemDesign": boolean,
  "systemDesignQuestions": string[], // If there is an system design question make it more descriptive and clear so that people can understand and work on the question, question must be as descriptive as possible **USE MARKDOWN**
  "tldr": string, // Summary of the interview experience empty if isInterview is false **USE MARKDOWN**
  "strategy": string // Strategy used for the interview empty if isInterview is false **USE MARKDOWN**
}

Do not use words like student, candidate, interviewee, user, person, author. Use the exact words from the post.
Use null for unknown strings and empty arrays for unknown lists.
Respond with only the JSON, no markdown or explanation.`;

  try {
    console.log(`[${index + 1}/${total}] Processing: ${title}`);
    const result = await model.generateContent(prompt);
    const rawText = result.response.text();
    const jsonStr = extractJsonFromResponse(rawText);

    if (!jsonStr) throw new Error("JSON extraction failed from response.");

    const parsed = JSON.parse(jsonStr);
    return parsed;
  } catch (error) {
    console.error(`[${index + 1}/${total}] Failed: ${title}\n`, error?.message);
    if (error?.message.includes("429")) {
      console.log("Rate limit hit. Retrying");
      await sleep(15000);
      return processSingleInterview(interviewData, index, total);
    }
    return null;
  }
}

async function processInterviews(startIndex = 0, limit = 1000) {
  const interviews = discussionsData.slice(startIndex, startIndex + limit);
  const delayMs = 2000;
  const outputPath = path.join(__dirname, "interview_summaries.json");

  console.log(`Starting to process ${interviews.length} interviews...`);

  for (let i = 0; i < interviews.length; i++) {
    const summary = await processSingleInterview(
      interviews[i],
      i + startIndex,
      discussionsData.length
    );

    if (summary) {
      try {
        let existingSummaries = [];
        try {
          const fileContent = await fs.readFile(outputPath, "utf-8");
          if (fileContent) {
            existingSummaries = JSON.parse(fileContent);
          }
        } catch (readError) {
          if (readError.code !== 'ENOENT') {
            console.error("Error reading existing summaries file:", readError);
          }
        }

        existingSummaries.push(summary);
        await fs.writeFile(outputPath, JSON.stringify(existingSummaries, null, 2));
        console.log(`[${i + startIndex + 1}/${discussionsData.length}] Successfully processed and saved: ${summary.companyName}`);

      } catch (writeError) {
        console.error("Failed to write summary to file:", writeError);
      }
    }

    if (i < interviews.length - 1) {
      await sleep(delayMs);
    }
  }

  console.log(`Finished processing all interviews in the batch.`);
}

processInterviews().catch(console.error);