const TurmaModel = require ("../../turma/models/turma.model")

// const { Op } = require("sequelize");
// const SecretarioModel = require("../models/secretario.model");
// const AlunoModel = require("../../aluno/models/aluno.model");

class TurmaController {
  static async criarTurma(req, res){
  try {
    const { cod_turma, cod_curso, turno } = req.body;
    if (!cod_turma || !cod_curso || !turno) {
      return res
        .status(400)
        .json({ msg: "Todos os campos devem serem preenchidos!" });
    }
    const turma = await trumaModel.create({
      cod_turma,
       cod_curso,
       turno 
      
    });
    res.status(201).json({msg:'turma criada com sucesso', turma:turma});
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
  }
}



  static async listarTodasTurma(req, res) {
    try {
      const { matricula, nome, email, senha, turma_cod } = req.body;
      if (!matricula || !nome || !email || !senha || !turma_cod) {
        return res
          .status(400)
          .json({ msg: "Todos os campos devem serem preenchidos!" });
      }
      const aluno = await AlunoModel.create({
        matricula,
        nome,
        email,
        senha,
        turma_cod,
      });
      res.status(201).json(aluno);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async listarTurmaPorCodigo(req, res) {
    try {
      const alunos = await AlunoModel.findAll();
      if (alunos.length === 0) {
        return res.status(200).json({ msg: "Não há alunos a serem exibidos!" });
      }
      res.status(200).json(alunos);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async listarTrumaPorCodigo(req, res) {
    try {
      const matricula = req.params.matricula;
      const aluno = await AlunoModel.findByPk({ matricula });
      if (!aluno) {
        return res.status(404).json({ msg: "Aluno não encontrado!" });
      }
      res.status(200).json(aluno);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async editarTurmaPorCodigo(req, res) {
    try {
      const matricula = req.params.matricula;
      const { nome, senha, turma_cod } = req.body;
      if (!nome || !senha || !turma_cod) {
        return res.status(400).json({
          msg: "Os campos nome, senha e codigo da turma devem serem preenchidos!",
        });
      }
      const alunoAtualizado = await AlunoModel.update(
        { nome: nome, senha: senha, turma_cod: turma_cod },
        {where: { matricula: matricula }}
      );
      if (alunoAtualizado.length === 0) {
        return res.status(404).json({ msg: "Aluno não encontrado!" });
      }
      res.status(200).json(alunoAtualizado);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async deletarAluno(req, res) {
    try {
      const matricula = req.params.matricula;
      const aluno = await AlunoModel.findByPk({ matricula });
      if (!aluno) {
        return res.status(404).json({ msg: "Aluno não encontrado!" });
      }
      await AlunoModel.destroy({
        where: {
          matricula: matricula,
        },
      });
      res.status(200).json({ msg: "Aluno excluido com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
}
