import { UploadedFile } from "express-fileupload";
import path from "path";
import fs from "fs";

export const storeFile = (file: UploadedFile | undefined) => {
  if (!file) throw new Error("No file provided");

  const uploadPath = process.env.UPLOAD_PATH ?? "data";
  const uploadFolder = path.join(uploadPath);
  fs.mkdirSync(uploadFolder, { recursive: true });

  file.mv(path.join(uploadFolder, file.name), (err) => {
    if (err) {
      console.error(err);
      throw new Error("Internal server error, while file uploading.");
    }
  });
};
