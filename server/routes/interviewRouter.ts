import { Router } from "express";
import { createAssitant } from "../controllers/assitantController";
import { getExperiences } from "../controllers/interviewController";

export const interviewRouter = Router();

interviewRouter.post("/api/interview", createAssitant);
interviewRouter.get("/api/experiences", getExperiences);
