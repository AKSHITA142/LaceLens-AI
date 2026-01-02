import express from "express";
import { upload } from "../utils/fileUpload.js";
import { scanLace } from "../controllers/scan.controller.js";

const router = express.Router();

router.post("/scan", upload.single("image"), scanLace);

export default router;
