import Senai from "../models/AtividadeSenai.js"

export const listarAtividades = async (req, res) => {
    try{
        const atividades =  Senai.findAll()
        res.status(200).json(atividades)
    }catch (error){
        console.log(error)
        res.status(500).json({
            mensage: `Falha ao registrar as atividades do Senai`
        })
    }
}