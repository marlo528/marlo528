import { DataTypes, UUIDV4 } from "sequelize";
import { Conn } from "../config/Conn.js";
import { MateriaModels } from "./MateriaModels.js";

export const BimestreModels = Conn.define(
  "Bimestre",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: `O número do bimestres deve ser maior que zero.`,
        },
      },
    },
    fundamentos_teoricos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    materia_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "MateriaModels",
        key: "id",
      },
      onUpdate: `CASCADE`,
      onDelete: `CASCADE`,
    },
  },
  {
    tableName: "Bimestre",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
      {
        name: `bimestre_materia_numero_unico`,
        unique: true,
        fields: ["materia_id", "numero"],
      },
    ],
  },
);
