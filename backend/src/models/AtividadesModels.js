import { DataTypes, UUIDV4 } from "sequelize";
import { Conn } from "../config/Conn.js";
import { UsuariosModels } from "./UsuarioModels.js";
import { BimestreModels } from "./Bimestremodels.js";

export const AtividadesModels = Conn.define("Atividades", {
    id:{
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    usuario_id:{
        type: DataTypes.UUID,
        references:{
            model: UsuariosModels,
            key: "id"
        }
    },
    bimestre_id:{
        type: DataTypes.UUID,
        references: {
            model: BimestreModels,
            id: "id"
        }
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tecnologias:{
        type: DataTypes.STRING,
    },
    descricao: {
       type: DataTypes.TEXT 
    },
    imagem: {
        type: DataTypes.STRING
    }
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "Atividades",
    indexes:[
        
        {
            unique: true,
            fields:["usuario_id", "bimestre_id"]
        }
    ]
        
    
}
)