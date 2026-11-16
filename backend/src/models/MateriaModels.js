import { DataTypes, UUIDV4 } from "sequelize";
import { Conn } from "../config/Conn.js";
import { UsuariosModels } from "./UsuarioModels.js";

export const MateriaModels = Conn.define("Materias", {
    id:{
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    usuario_id:{
        type: DataTypes.UUID,
       allowNull: false,
       references: {
        model: "UsuariosModels",
        key: `id`
       },
       onUpdate: `CASCADE`,
       onDelete: `CASCADE`
    },
    instituicao:{
        type: DataTypes.ENUM("SESI", "SENAI"),
        allowNull: true,
        validate:{
            isIn:{
                args:["SESI","SENAI"],
                msg:`Apenas pode escolher as instituições presentes.`
            }
        }
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:{
                args:[2, 100],
                msg: `O nome dev ter no minimo 2 caracteres.`
            },
            notEmpty:{
                msg:`O nome não pode ser vazio`
            }            
        }
    },
    conexoes_interdisciplinares:{
        type: DataTypes.TEXT,
        allowNull: true
    }
    
},{
    tableName: "Materias",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes:[
        {
            name: `materia_usuario_instituicao_nome_unico`,
            unique: true,
            fields:["usuario_id", "instituicao", "nome"]
        }
    ]
})