import { Sequelize } from "sequelize"

export const Conn = new Sequelize("WebPortfolio", "root", "123456789",{
    host: "localhost",
    dialect: "mysql"
})