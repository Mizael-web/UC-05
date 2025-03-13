const AlunoModel = require ("../models/alunoModels")


class AlunoController {
    
       static async criar(requesicao, resposta){
        try {

           const  { matricula, nome, email, senha} = requesicao.body
           if (!matricula ||!nome ||!email ||!senha )
           return resposta.status (200).json ({mensagem:" todos os campos devem ser preenchidos"})
        
           const novoAluno = await AlunoModel.criar(matricula, nome, email, senha)
           resposta.status(201).json ({ mensagem: "Aluno criado com sucesso", aluno:novoAluno})        
            
        } catch (error) {
          resposta.status(500).json ({mensagem: "Erro ao criar o aluno!, erro: error.message"


            }

        
       static async editar(){
        
       }
     
       }
       static async listarPorMatricula(requesicao, resposta){
        try {
            const matricula = requesicao.params.id
            const aluno = await AlunoModel.listarPorID(matricula)
            if (!aluno){
                return resposta.status(201).json ({menssagem: " Aluno não encontrado!"})
                
                resposta.status(200).json (aluno)
            }
        } catch (error) {
            resposta.status(500).json ({mensagem: "Erro ao criar o aluno!, erro: error.message"})
  
            }       


       }
       static async excluirTodos(requesicao, resposta){
        try {            
           const aluno = await AlunoModel.listar()
           if ( aluno.length ===0){
            const novoAluno = await AlunoModel.listar(matricula, nome, email, senha)
             return resposta.status(201).json ({ mensagem: "Aluno não existe"}) 

            resposta.status.(200).json(Aluno)
         } catch (error) {
           resposta.status(500).json ({mensagem: "Erro ao listar o aluno!, erro: error.message"
 
        }


         
       }
       static async excluirPorMatricula(requesicao, resposta){
     
       }
    }
     moudele.express = Controllers