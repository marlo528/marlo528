import { DataTypes, UUIDV4 } from "sequelize";
import { Conn } from "../config/Conn.js";
import { UsuariosModels } from "./UsuarioModels.js";
import { BimestreModels } from "./Bimestremodels.js";
import { MateriaModels } from "./MateriaModels.js";


export const AtividadesModels = Conn.define(
  "Atividades",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `O título da atividade é obrigátorio.`,
        },
      },
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: `A descrição da atividade é obrigátoria.`,
      },
    },
    tecnologias: {
      type: DataTypes.STRING,
    },
    data_realizacao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    imagem: {
      type: DataTypes.STRING,
      defaultValue: ``,
      allowNull: true,
    },
    usuario_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "UsuariosModels",
        key: "id",
      },
      onUpdate: `CASCADE`,
      onDelete: `CASCADE`,
    },
    materia_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "MateriaModels",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    bimestre_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "bimestres",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "Atividades",
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ["usuario_id", "bimestre_id"],
    //   },
    // ],
  },
);

