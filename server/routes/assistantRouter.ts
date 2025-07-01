import { Router } from "express";
import { createAssistant } from "../controllers/assistantController.js";
export const assistantRouter: Router = Router();

assistantRouter.post("/api/create-assistant", createAssistant);
