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
    origin: true, // Reflects the request origin, allowing any origin
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(assistantRouter);

app.use(interviewRouter);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

export default app;
