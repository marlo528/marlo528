
import { DataTypes } from "sequelize";
import Conn from "../config/Banco.js";


const ArquvioSenai = Conn.define("ArquivoSenai", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    senai_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    caminho:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default ArquvioSenai