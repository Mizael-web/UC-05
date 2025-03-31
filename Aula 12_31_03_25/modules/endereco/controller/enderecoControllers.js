const EnderecoModel = require.apply("../models/enderecoModels")



class EnderecoController {
  static async criarEndereco (requisicao, reposta) {
try {  
     const { matricula, cep, numero, ponto_referencia } = requisicao.body
if (!matriucla || !cep || !numero){
    return resposta.status(400).json({
        mensagem: " Todos os campos devem ser preenchidos"})

}
   const endereco = await EnderecoModel.criar.criarEndereco(matricula)
   resposta.status(201).json(endereco) 

} catch (erro) {
   resposta.status(500).json({ mensagem: "Erro interno do servidor. Por favor tente mais tarde!", erro: error.message})
}
}

static async editarEnderecoAluno(requisicao, resposta) {
    // http://localhost:3000/endereco/a1234/
    try {
      const matricula = requisicao.params.matricula;
      const {cep, numero, ponto_referencia } = requisicao.body;
      if (!cep || !numero) {
        return resposta
          .status(400)
          .json({ mensagem: "Todos os campos devem ser fornecidos!" });
      }
      const  endereco= await EnderecoModel.editarEndereco(matricula, cep, numero, ponto_endereco);
      if (endereco.length === 0) {
        return resposta.status(404).json({ mensagem: "Endereco não encontrado!" });
      }
      resposta.status(200).json({mensagem: "Endereço editado com sucesso!", endereco: endereco });
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao editar o endereco!", erro: error.message });
    }
  }

  static async listarEnderecoCep(requisicao, resposta) {
    // htpps://localhost:3000/endereco/cep/59000000
    try {
      const cep = requisicao.params.cep
      const endereco = await EnderecoModel.listarEnderecoCep(cep); // 590000000
      if (endereco.length === 0) {
        return resposta.status(404).json({ mensagem: "Cep não encontrado!" });
      }
      resposta.status(200).json(endereco);
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro interno do servidor. Por favor tente mais tarde!", erro: error.message})
     
    }
}
  static async listarEnderecoCidade(requisicao, resposta) {
      // htpps://localhost:3000/endereco/cidade/natal
    try {
    
        const cidade = requisicao.params.cidade;
        const endereco= await EnderecoModel.listarEnderecoCidade(cidade); // 590000000
        if (endereco.length === 0) {
          return resposta.status(404).json({ mensagem: "Cidade não encontrado!" });
        }
        resposta.status(200).json(endereco);
      } catch (error) {
        resposta.status(500).json({
          mensagem: "Erro interno do servidor. Por favor tente mais tarde!", erro: error.message})
        }
    }
      

    static async listarEndereco(requisicao, resposta) {
       try {
        const matricula = requisicao.params.matricula;
            const endereco = await EnderecoModel.listrarEndereco(matriula)
            if (endereco.length === 0) {
              return resposta.status(404).json({mensagem: "Cidade não encontrada!" });
            }
            resposta.status(200).json(endereco);
          } catch (error) {
            resposta.status(500).json({
              mensagem: "Erro interno do servidor. Por favor tente mais tarde!", erro: error.message})
            }
        }
      }

module.exports = EnderecoController

  

