import { Conn } from "./config/Conn.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config()

const PORT = Number(process.env.PORT || 3030);

const iniciarServidor = async () => {
  try {
    await Conn.authenticate();
    console.log("Conexão com Mysql estabelecida com sucesso");

    app.listen(PORT, () => {
      console.log(`Server started on port: htt://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
        "falha ao iniciar a aplicação",
        error.message
    )
    process.exitCode = -1
  }
};

iniciarServidor()
