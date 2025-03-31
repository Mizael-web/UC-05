const express = require('express')
const AlunoController = require('../controllers/enderecoControllers')


const router = express.Router()
// http://localhost/3000/endereco

//buscar todos endereço  http://localhost/3000/endereco
router.get("/endereco", EnderecoController.listarEndereco)

//buscar todos endereços pelo cep http://localhost/3000/endereco
router.get("/endereco/cep/:cep", EnderecoController.listarEnderecoCep)

//buscar todos endereços pelo cep http://localhost/3000/cidade/natal
router.get("/endereco/cidade/:cidade", EnderecoController.listarEnderecoCidade)

//buscar todos endereços por aluno http://localhost/3000/endereco
router.get("/endereco/aluno/:matricula", EnderecoController.listarEnderecoAluno)

//criar endereço do aluno  http://localhost/3000/endereco/a1234
router.put("/endereco/:matricula", EnderecoController.editarEnderecoAluno)



module.exports = router