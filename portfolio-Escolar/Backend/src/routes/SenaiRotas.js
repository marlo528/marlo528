import express from "express"

import { listarAtividades } from "../controllers/senaiControllers.js"

const router = express.Router()

router.get("/", listarAtividades)

export default router