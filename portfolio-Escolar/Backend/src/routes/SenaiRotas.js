import express from "express"

import { cadastrarAtividade, listarAtividades } from "../controllers/senaiControllers.js"
import upload from "../config/upload.js"

const router = express.Router()

router.get("/", listarAtividades)
router.post("/", 
    upload.fields([
        {name: "imagem", maxCount: 1},
        {name: "arquivos", maxCount: 10}
    ]),
    cadastrarAtividade
)
export default router