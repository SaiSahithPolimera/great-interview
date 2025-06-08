import { Router } from "express";
import { createAssitant } from "../controllers/assitantController.js";

export const assitantRouter: Router = Router();

assitantRouter.post("/api/create-assitant", createAssitant);
