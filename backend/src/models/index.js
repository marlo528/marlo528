import Usuario from "./Usuario.js";
import Materia from "./Materia.js";
import Bimestre from "./Bimestre.js";
import Atividade from "./Atividade.js";
import Arquivo from "./Arquivo.js";

// USUARIO E MATERIA
Usuario.hasMany(Materia, {
    foreignKey: "usuario_id",
    as: "materias",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Materia.belongsTo(Usuario, {
    foreignKey: "usuario_id",
    as: "usuario"
});


// MATERIA E BIMESTRE
Materia.hasMany(Bimestre, {
    foreignKey: "materia_id",
    as: "bimestres",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Bimestre.belongsTo(Materia, {
    foreignKey: "materia_id",
    as: "materia"
});


// MATERIA E ATIVIDADE
Materia.hasMany(Atividade, {
    foreignKey: "materia_id",
    as: "atividades",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Atividade.belongsTo(Materia, {
    foreignKey: "materia_id",
    as: "materia"
});


// BIMESTRE E ATIVIDADE
Bimestre.hasMany(Atividade, {
    foreignKey: "bimestre_id",
    as: "atividades",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Atividade.belongsTo(Bimestre, {
    foreignKey: "bimestre_id",
    as: "bimestre"
});


// USUARIO E ATIVIDADE
Usuario.hasMany(Atividade, {
    foreignKey: "usuario_id",
    as: "atividades",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Atividade.belongsTo(Usuario, {
    foreignKey: "usuario_id",
    as: "usuario"
});


// ATIVIDADE E ARQUIVO
Atividade.hasMany(Arquivo, {
    foreignKey: "atividade_id",
    as: "arquivos",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Arquivo.belongsTo(Atividade, {
    foreignKey: "atividade_id",
    as: "atividade"
});

export {
    Usuario,
    Materia,
    Bimestre,
    Atividade,
    Arquivo
};



