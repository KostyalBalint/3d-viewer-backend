import { UploadedFile } from "express-fileupload";

export const storeFile = (file: UploadedFile) => {
  const uploadPath = __dirname + "/data/" + file.name;
  file.mv(uploadPath, (err) => {
    if (err) {
      return {
        message: "Internal server error, while file uploading.",
      };
    }
    return {
      message: "File uploaded successfully.",
    };
  });
};
