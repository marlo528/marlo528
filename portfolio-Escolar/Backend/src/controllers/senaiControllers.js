import Senai from "../models/AtividadeSenai.js";
import ArquivoSenai from "../models/ArquivoSenai.js";

export const listarAtividades = async (req, res) => {
  try {
    const atividades = await Senai.findAll({
      include: [
        {
          model: ArquivoSenai,
          as: "arquivos",
        },
      ],
    });
    res.status(200).json(atividades);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensage: `Falha ao registrar as atividades do Senai`,
    });
  }
};

export const cadastrarAtividade = async (req, res) => {
  try {
    const { titulo, materia, descricao, tecnologias } = req.body;

    const atividade = await Senai.create({
      titulo,
      materia,
      descricao,
      tecnologias,
      imagens: req.files?.imagens?.[0]?.filename || null,
    });

    const arquivos = req.files?.arquivos || [];

    for (const arquivo of arquivos) {
      await ArquivoSenai.create({
        senai_id: atividade.id,
        nome: arquivo.originalname,
        caminho: arquivo.path,
        tipo: arquivo.mimetype,
      });
    }

    res.status(201).json({
      message: `Atividade criada com sucesso`,
      atividade: atividade.toJSON(),
    });
    console.log(atividade);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: `Error ao cadastrar atividade do Senai.`,
    });
  }
};
