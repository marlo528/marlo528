
import dotenv from "dotenv/config"
import { Sequelize } from "sequelize";

// Configura a conexão com o banco MySQL.
export const Conn = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        dialect: "mysql",

        // Configuração inicial do pool de conexões.
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);
export default Conn


