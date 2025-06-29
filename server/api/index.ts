import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { assistantRouter } from "../routes/assistantRouter.js";
import { interviewRouter } from "../routes/interviewRouter.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: [process.env.HOST_URL || ""],
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(assistantRouter);

app.use(interviewRouter);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
