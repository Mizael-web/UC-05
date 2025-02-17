// Importando com (ESM)-em6 / caso use o import com from precisa de mudar o package.json para modules
// import express from 'express';
// import dotenv from 'dotenv';

// importando com commonjs
const express = require ("express");
const dotenv  = require ("dotenv");

// configurando a biblioteca dotenv
dotenv.config();

//
const port = process.env.PORTA;
const app = express();// isntanciando um apolicação

//aplicação use express como json(javascript object notation)
app.use(express.json());

// array de banco de dados
const bancoDados = [];

// requesita e lista os produtos do banco de dados
// app.get('/produtos', (requisicao, resposta) => {
//   resposta.json(bancoDados);
// });

// codigo do get melhorado com trycatch
app.get('/produto', (requisicao, resposta) => {
  //tratamento de use
  try {
  if(bancoDados.length ===0){
        return resposta.status(200).json(
          {
            msg:"Produto encontrado com sucesso"
          });
        
  }
  resposta.status(200).json(bancoDados);    
  } catch (error) {
    resposta.status(500).json(
      {
        msg:"Erro ao buscar produto",
        erro:error.message// mostra a mensagem do erro
      })    
  }  
});





// app.post('/produtos', (requisicao, resposta) => {  
//     const { id, nome, preco } = requisicao.body;
//     const novoProduto = { id, nome, preco };
//     bancoDados.push(novoProduto);
//     resposta.status(201).json({ mensagem: "Produto criado com sucesso" });
//   });

// post melhorado com o trycatch
app.post('/produto', (requisicao, resposta) => {
  try {
    const { id, nome, preco } = requisicao.body;
     if (!id|| !nome ||!preco){
      return resposta.status(200).json(
       {
        mensagem: "Todos os dados devem ser preenchidos"
      });
        
       }
    const novoProduto = { id, nome, preco };
    bancoDados.push(novoProduto);
    resposta.status(201).json(
      {
         mensagem: "Produto criado com sucesso" 
      });

  } catch (error) {
    resposta.status(500).json(
      {
        msg:"Erro ao buscar produto",
        erro:error.message// mostra a mensagem do erro
      });  
      }  
})

// atuallizar o dados

app.put('/produto/:id', (requisicao, resposta) => {
  try {
    // localhost:300/produtos/1
    const  id = requisicao.params.id;
    const {novoNome, novoPreco} = requisicao.body;
    if (!id){
      return resposta.status(404).json (
        {
          mensagem: " Informe o parametro"
        });        
      }
    const produto = bancoDados.find(elemento => elemento.id === id)
    if (!produto)
        {
         return resposta.status(404).json(
          {
            mensagem:" Produto encontrado"
          });              
         
        produto.nome = novoNome || produto.nome
        produto.preco = novoPreco || produto.preco
      }
      resposta.status(200).json (
        {
          msg:" Produto atualizado com sucesso"
        });      
      
   
   } catch (error) {
    resposta.status(500).json(
     {
       msg:"Erro ao editar produto",
         erro:error.message// mostra a mensagem do erro
        });        
   }
}) 
    


// deletar dados

app.delete('/produto/:id', (requisicao, resposta) => {
  try {
    const id = requisicao.params.id
    const index = bancoDados.findIndex(elemento => elemento.id === id)
    if ( index === -1){
      return resposta.status(404).json (
        {
          mensagem: " produto não encontrado!"
        })
    }
    bancoDados.splice(index, 1)
    resposta.status(200).json (
      {
        mensagem:" Produto deletado com sucesso!"

      });   
  } catch (error) {
    resposta.status(500).json(
      {
        msg:"Erro ao deletar produto",
          erro:error.message// mostra a mensagem do erro   
        }) ;   
      }  
    })

app.get('/produto', (requisicao, resposta) => {
  try {
    const id = requisicao.params.id
    const produto =bancoDados.find(elemento => elemento.id === id)
    if (!prodtudo){
      return resposta.status(404).json
    } (
      {
        mensagem: " Produto não encontrado!"
      })
      resposta.status(200).json(produto)
    
  } catch (error) {
    resposta.st(500).json(
      {
        mensgaem: " Erro ao buscar produto",
        erro:error.message
      }
    );
    }
   
  })   
  

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})



