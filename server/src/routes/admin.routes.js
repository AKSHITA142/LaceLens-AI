import express from "express";
import { upload } from "../utils/upload.js";
import { uploadLace } from "../controllers/admin.controller.js";

const router = express.Router();

router.post(
  "/upload-lace",
  upload.single("image"),
  uploadLace
);

export default router;
