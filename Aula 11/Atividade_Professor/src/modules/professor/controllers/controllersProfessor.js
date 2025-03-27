const ProfessorController = require("./controllersProfessor");
const ProfessorModel = require("../models/modelsProfessor");
const router = require ("../router/routerProfessor")

class ProfessorController {
  static async criar(requisicao, resposta) {
    try {
      const { matricula, nome, email, disciplina, turma } = requisicao.body;
      if (!matricula || !nome || !email || !disciplina || !turma) {
        return resposta
          .status(400)
          .json({ mensagem: "Todos os campos devem ser fornecidos!" });
      }
      const novoProfessor = await ProfessorModel.criar(matricula, nome, email, disciplina, turma);
      resposta
        .status(201)
        .json({ mensagem: "professor criado com sucesso", professor: novoProfessor });
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao criar Professor!", erro: error.message });
    }
  }
  static async editar(requisicao, resposta) {
    // http://localhost:3000/aluno/
    try {
      const matricula = requisicao.params.matricula;
      const {nome, email, disciplina, turma} = requisicao.body;
      if (!nome || !email || !email || !disciplina || !turma) {
        return resposta
          .status(400)
          .json({ mensagem: "Todos os campos devem ser preenchidos!" });
      }
      const professor = await ProfessorModel.editar(matricula, nome, email, disciplina, turma);
      if (professor.length === 0) {
        return resposta.status(400).json({ mensagem: "Professor não encontrado!" });
      }
      resposta.status(200).json({ mensagem: "Professor editado com sucesso!", professor: professor });
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao editar o Professor!", erro: error.message });
    }
  }
  static async listarTodos(requisicao, resposta) {
    try {
      const professor = await ProfessorModel.listar();
      if (professor.length === 0) {
        return resposta
          .status(400)
          .json({ mensagem: "Não existe professor a serem exibidos!" });
      }
      resposta.status(200).json(professor);
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao listar os professores!", erro: error.message });
    }
  }
  static async listarPorMatricula(requisicao, resposta) {
    try {
      const matricula = requisicao.params.matricula;
      const professor = await ProfessorModel.listarPorMatricula(matricula);
      if (professor.length === 0) {
        return resposta.status(400).json({ mensagem: "Professro não encontrado!" });
      }
      resposta.status(200).json(professor);
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao listar por matricula do professor!",
        erro: error.message,
      });
    }
  }
  static async excluirTodos(requisicao, resposta) {
    try {
      debug("Rota raiz foi acessada!");
      await ProfessorModel.excluirTodos();
      resposta
        .status(200)
        .json({ mensagem: "Todos os professores foram excluidos com sucesso!" });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao excluir todos os professores!",
        erro: error.message,
      });
    }
  }
  static async excluirPorMatricula(requisicao, resposta) {
    try {
      const matricula = requisicao.params.matricula;
      const professor = await ProfessorModel.listarPorMatricula(matricula);
      if (professor.length === 0) {
        return resposta.status(400).json({ mensagem: "Professor não encontrado!" });
      }
      await ProfessorModel.excluirPorMatricula(matricula);
      resposta.status(200).json({ mensagem: "Professor excluido com sucesso!" });
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao excluir o professor!", erro: error.message });
    }
  }
}

module.exports = ProfessorController