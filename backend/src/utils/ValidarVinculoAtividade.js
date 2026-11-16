import { Materia, Bimestre, Usuario } from "../models/index.js";

export const validarVinculoAtivdade = async ({
  usuario_id,
  materia_id,
  bimestre_id,
}) => {
  const materia = await Materia.findOne({
    where: {
      id: materia_id,
      usuario_id: usuario_id,
    },
  });

  if (!materia) {
    return {
      valido: false,
      status: 404,
      mensagem: "Matéria não encontrada.",
    };
  }

  if (materia.instituicao === "SESI") {
    if (bimestre_id === null || bimestre_id === undefined) {
      return {
        valido: false,
        status: 400,
        mensagem: "Atividade do SESI precisam estar vinculadas a um bimestre.",
      };
    }
  }

  const bimestre = await bimestre.findOne({
    where: {
      id: bimestre_id,
      materia_id: materia_id,
    },
  });

  if (!bimestre) {
    return {
      valido: false,
      status: 404,
      mensagem: "Bimestre não ecnontro para está matéria.",
    };
  }

  if (materia.instituicao === "SENAI") {
    if (bimestre_id !== null && bimestre_id !== undefined) {
      return {
        valido: false,
        status: 400,
        mensagem: "Atividade do SENAI não podem possuir bimestre",
      };
    }
  }

  return{
    valido: true,
    materia
  }
};
