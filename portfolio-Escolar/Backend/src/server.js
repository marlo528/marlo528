import express from "express"
import cors from "cors"

import Conn from "./config/Banco.js"
import Senai from "./models/AtividadeSenai.js"

import senaiRotas from "./routes/SenaiRotas.js"


const app = express()
const PORT = 3333
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Rodando!"
    })
})

app.use("/senai", senaiRotas)

Conn.sync()
.then(() => {
    console.log("Banco sincronizado")

    app.listen(PORT, () =>{
        console.log(`Servidor rodando em http://localhost:${PORT}`)
    })
})
.catch((error) => {
    console.error("Erro ao sincronizar o banco", error)
})
