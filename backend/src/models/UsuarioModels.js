import { DataTypes, UUIDV4 } from "sequelize";
import { Conn } from "../config/Conn.js";

export const UsuariosModels = Conn.define("Usuario", {
    id:{
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,  
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:{
                args:[3, 100],
                msg: `O nome deve ter no minimo 3 caracteres.`
            },
            notEmpty:{
                msg: `O nome é obrigatório.`
            }
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:{
                msg: `Insira um email válido.`
            },
        }
    },
    senha:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: `A Senha não pode ser vazia.`
            }
        }
    },
    turma:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            len:{
                args: [0, 100],
                msg:`A turma é obrigátoria.`
            },
            notEmpty:{
                msg: `Turma não pode ser vazia.`
            }
            
        }
    },
    foto:{
        type: DataTypes.STRING,
        defaultValue: ""
    },
    descricaoPessoal:{
        type: DataTypes.TEXT,
    }
},
{
    timestamps: true,
    tableName: "Usuario"
})