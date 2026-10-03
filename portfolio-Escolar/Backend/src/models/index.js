import Senai from "./AtividadeSenai.js";
import ArquivoSenai from "./ArquivoSenai.js";

Senai.hasMany(ArquivoSenai, {
    foreignKey: "senai_id",
    as: "arquivos"
})
ArquivoSenai.belongsTo(Senai, {
    foreignKey: "senai_id",
    as: "projeto"
})

export { Senai, ArquivoSenai }