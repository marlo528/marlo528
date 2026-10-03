import { Sequelize } from "sequelize"

const Conn = new Sequelize({
    dialect: "sqlite",
    storage: "./banco/portfolio.sqlite",
})

export default Conn