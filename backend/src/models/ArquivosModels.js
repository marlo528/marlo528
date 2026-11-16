import { DataTypes, UUIDV4 } from "sequelize";
import { Conn } from "../config/Conn.js";
import { AtividadesModels } from "./AtividadesModels.js";

export const ArquivosModels = Conn.define(
  "Arquivos",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `O nome do arquivo é obrigatório.`,
        },
      },
    },
    caminho: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    atvidade_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "AtividadesModels",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "upadet_at",
    tableName: "Arquivo",
  },
);
