import { Router } from "express";
import { createAssitant } from "../controllers/assitantController.js";

export const router: Router = Router();

router.post("/api/create-assitant", createAssitant);
