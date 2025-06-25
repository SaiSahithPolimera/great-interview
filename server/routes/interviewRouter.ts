import { Router } from "express";
import { createAssitant } from "../controllers/assitantController";
import { getExperiences, getInterviewQuestions, getSystemDesignQuestions } from "../controllers/interviewController";
export const interviewRouter = Router();

interviewRouter.post("/api/interview", createAssitant);
interviewRouter.get("/api/system-design", getSystemDesignQuestions);
interviewRouter.get("/api/experiences", getExperiences);
interviewRouter.get("/api/questions", getInterviewQuestions);
