import express from "express"

import { listarAtividades } from "../controllers/senaiControllers.js"
import upload from "../config/upload.js"

const router = express.Router()

router.get("/", listarAtividades)
router.post("/upload", upload.single("arquivo"), (req, res) => {
    console.log(req.file)

    res.status(200).json({
        mensage: `Arquivo enviado com sucessio`,
        arquivo: req.file
    })
})
export default router