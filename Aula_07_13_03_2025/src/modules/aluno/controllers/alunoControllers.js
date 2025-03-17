const AlunoModel = require ("../models/alunoModels")


class alunoController {
    
       static async criar(requesicao, resposta){
        try {

           const  { matricula, nome, email, senha} = requesicao.body
           if (!matricula ||!nome ||!email ||!senha )
           return resposta.status (200).json ({mensagem:" todos os campos devem ser preenchidos"})
        
           const novoAluno = await AlunoModel.criar(matricula, nome, email, senha)
           resposta.status(201).json ({ mensagem: "Aluno criado com sucesso", aluno:novoAluno})        
            
        } catch (error) {
          resposta.status(500).json ({mensagem: "Erro ao criar o aluno!, erro: error.message" })
         }
      }
        
      
        static async editar(requisicao, resposta) {
          try {
              const matricula = requisicao.params.id;
              const { nome, email, senha } = requisicao.body;
              
              const alunoAtualizado = await AlunoModel.editar(matricula, nome, email, senha);
              if (!alunoAtualizado) {
                  return resposta.status(400).json({ mensagem: "Aluno não encontrado !" });
              }
              resposta.status(200).json({ mensagem: "Aluno atualizado com sucesso", aluno: alunoAtualizado });
          } catch (error) {
              resposta.status(500).json({ mensagem: "Erro ao editar o aluno!", erro: error.message });
          }
      }
     
         
        static async listarTodos(requisicao, resposta){
                   
       try {
              const alunos = await AlunoModel.listar()
              if(alunos.length === 0){
                  return resposta.status(400).json({mensagem:"Não existe alunos a serem exibidos!"})
              }
              resposta.status(200).json(alunos)
          } catch (error) {
              resposta.status(500).json({mensagem:"Erro ao listar os alunos!", erro: error.message})
          }
      }

       static async listarPorMatricula(requesicao, resposta){
        try {
            const matricula = requesicao.params.id
            const aluno = await AlunoModel.listarPorId(matricula)
            if (!aluno){
                return resposta.status(201).json ({menssagem: " Aluno não encontrado!"})
            }
                resposta.status(200).json (aluno)
            
        } catch (error) {
            resposta.status(500).json ({mensagem: "Erro ao listar o aluno!, erro: error.message"})
  
         }
      }
        

      static async excluirTodos(requisicao, resposta) {
        try {
            const resultado = await AlunoModel.excluirTodos();
            resposta.status(200).json({ mensagem: "Todos os alunos foram excluídos com sucesso!", resultado });
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao excluir todos os alunos!", erro: error.message });
        }
    }
      
    static async excluirPorMatricula(requisicao, resposta) {
      try {
          const matricula = requisicao.params.id;
          const resultado = await AlunoModel.excluirPorID(matricula);
          if (!resultado) {
              return resposta.status(400).json({ mensagem: "Aluno não encontrado ou erro ao excluir!" });
          }
          resposta.status(200).json({ mensagem: "Aluno excluído com sucesso!" });
      } catch (error) {
          resposta.status(500).json({ mensagem: "Erro ao excluir o aluno!", erro: error.message });
      }
  }
}
     
     module.exports = alunoController