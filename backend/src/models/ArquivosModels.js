import { DataTypes, UUIDV4 } from "sequelize";
import { Conn } from "../config/Conn.js";
import { AtividadesModels } from "./AtividadesModels.js";

export const ArquivosModels = Conn.define("Arquivos", {
    id:{
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    atvidade_id:{
        type: DataTypes.UUID,
        references:{
            model: AtividadesModels,
            key: "id"
        }
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    caminho:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "upadet_at",
    tableName: "Arquivo"
})