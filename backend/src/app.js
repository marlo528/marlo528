import dotenv from "dotenv"
import helmet from "helmet"
import express from "express"
import cors from "cors"
import { Conn } from "./config/Conn.js"

dotenv.config()

const app = express()

const origemFrontend = process.env.FRONTEND_URL

app.set("json spaces", 2)
app.use(
    cors({
        origin: "*",
        methods: ["GET","POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
    })
)
app.use(helmet())
app.use(express.json({ limit: "1mb"}))
app.use(express.urlencoded({
    extended: true,
    limit: "1mb"
}))
app.get("/", (req, res) => {
    return res.status(200).json({
        mensagem: "APi do Portfolio funcionando"
    })
})
Conn.sync().then().catch((error) => {
    console.log(error)
})

export default app