import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import { handleUpload } from "./fileUpload/handleUpload";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(fileUpload());

app.post("/upload", handleUpload);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Process is running",
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
