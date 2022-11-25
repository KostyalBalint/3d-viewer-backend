import { Request, Response } from "express";
import { storeFile } from "./storeFile";

export const handleUpload = (req: Request, res: Response) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: "No files were uploaded." });
  }

  const sampleFile = req.files.images;
  try {
    if (Array.isArray(sampleFile)) {
      //Multiple files => Save all of them
      sampleFile.map((file) => {
        storeFile(file);
      });
    } else {
      storeFile(sampleFile);
    }
    res.json({ message: "File uploaded successfully" });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ message: "Error while processing file upload" });
  }
};
