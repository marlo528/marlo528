import { DataTypes, UUIDV4 } from "sequelize";
import { Conn } from "../config/Conn.js";
import { MateriaModels } from "./MateriaModels.js";

export const BimestreModels = Conn.define("Bimestre", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  materia_id: {
    type: DataTypes.UUID,
    references: {
      model: "materia_id",
      key: "id",
    },
  },
  numero:{
    type: DataTypes.INTEGER,
    allowNull: true    
  },
  fundamentos_teoricos:{
    type: DataTypes.TEXT
  },
  
}
,{
    tableName: "Bimestre",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes:[
        {
            unique: true,
            fields:["materia_id", "numero",]
        }
    ]
});
