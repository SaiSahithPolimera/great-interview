import { Router } from "express";
import {
  getExperiences,
  getInterviewQuestions,
  getMockInterviews,
  getSystemDesignQuestions,
} from "../controllers/interviewController.js";
export const interviewRouter = Router();

interviewRouter.get("/api/system-design", getSystemDesignQuestions);
interviewRouter.get("/api/experiences", getExperiences);
interviewRouter.get("/api/questions", getInterviewQuestions);
interviewRouter.get("/api/mock-interviews", getMockInterviews);
