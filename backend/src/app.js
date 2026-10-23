import express from "express"
import cors from "cors"
import { Conn } from "./config/Conn.js"

const app = express()

app.set("json spaces", 2)
app.use(
    cors({
        origin: "*",
        methods: ["GET","POST", "PUT", "PATCH", "DELETE"],
        credentials: true
    })
)

app.use(express.json())

Conn.sync().then().catch((error) => {
    console.log(error)
})

export default app