import { Router } from "express";
import { createAssitant } from "../controllers/assitantController";


export const interviewRouter: Router = Router();

interviewRouter.post("/api/interview", createAssitant);