const ProfessorModel = require ("../models/professorModels")


class professorController {
    
       static async criar(requesicao, resposta){
        try {

           const  { matricula, nome, email, senha} = requesicao.body
           if (!matricula ||!nome ||!email ||!senha )
           return resposta.status (200).json ({mensagem:" todos os campos devem ser preenchidos"})
        
           const novoAluno = await AlunoModel.criar(matricula, nome, email, senha)
           resposta.status(201).json ({ mensagem: "Professor criado com sucesso", aluno:novoAluno})        
            
        } catch (error) {
          resposta.status(500).json ({mensagem: "Erro ao criar o professor!, erro: error.message" })
         }
      }
        
      
        static async editar(requisicao, resposta) {
          try {
              const matricula = requisicao.params.id;
              const { nome, email, senha } = requisicao.body;
              
              const professorAtualizado = await ProfessorModel.editar(matricula, nome, email, senha);
              if (!professorAtualizado) {
                  return resposta.status(400).json({ mensagem: "Professor não encontrado !" });
              }
              resposta.status(200).json({ mensagem: "Professor atualizado com sucesso", aluno: alunoAtualizado });
          } catch (error) {
              resposta.status(500).json({ mensagem: "Erro ao editar o Professor", erro: error.message });
          }
      }
     
         
        static async listarTodos(requisicao, resposta){
                   
       try {
              const professor = await ProfessorModel.listar()
              if(professor.length === 0){
                  return resposta.status(400).json({mensagem:"Não existe professor a serem exibidos!"})
              }
              resposta.status(200).json(alunos)
          } catch (error) {
              resposta.status(500).json({mensagem:"Erro ao listar os professor!", erro: error.message})
          }
      }

       static async listarPorMatricula(requesicao, resposta){
        try {
            const matricula = requesicao.params.id
            const aluno = await ProfessorModel.listarPorId(matricula)
            if (!aluno){
                return resposta.status(201).json ({menssagem: " Professor não encontrado!"})
            }
                resposta.status(200).json (aluno)
            
        } catch (error) {
            resposta.status(500).json ({mensagem: "Erro ao listar Professor!, erro: error.message"})
  
         }
      }
        

      static async excluirTodos(requisicao, resposta) {
        try {
            const resultado = await ProfessorModel.excluirTodos();
            resposta.status(200).json({ mensagem: "Todos os professores foram excluídos com sucesso!", resultado });
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao excluir todos os professores!", erro: error.message });
        }
    }
      
    static async excluirPorMatricula(requisicao, resposta) {
      try {
          const matricula = requisicao.params.id;
          const resultado = await ProfessorModel.excluirPorID(matricula);
          if (!resultado) {
              return resposta.status(400).json({ mensagem: "Professor não encontrado ou erro ao excluir!" });
          }
          resposta.status(200).json({ mensagem: "Professor excluído com sucesso!" });
      } catch (error) {
          resposta.status(500).json({ mensagem: "Erro ao excluir o Professor!", erro: error.message });
      }
  }
}
     
     module.exports = professorController