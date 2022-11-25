import { Request, Response } from "express";
import { storeFile } from "./storeFile";

export const handleUpload = (req: Request, res: Response) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: "No files were uploaded." });
  }

  const sampleFile = req.files.sampleFile;
  if (Array.isArray(sampleFile)) {
    //Multiple files => Save all of them
    sampleFile.forEach((file) => {
      storeFile(file);
    });
  } else {
    storeFile(sampleFile);
  }
};
