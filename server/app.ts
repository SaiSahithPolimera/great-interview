import express from "express";
import { router } from "./routes/assitantRouter.js";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use(cors(
    {
        origin: [process.env.host_url]
    }));
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.send("Hello");
})

app.use(router);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))