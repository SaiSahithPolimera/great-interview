import express from "express";
import { assitantRouter } from "./routes/assitantRouter.js";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: [process.env.host_url],
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(assitantRouter);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
