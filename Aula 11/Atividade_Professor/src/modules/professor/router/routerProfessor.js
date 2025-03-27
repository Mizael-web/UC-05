const express = require('express')
const ProfessorControllers = require('../controllers/controllersProfessor')

const router = express.Router()

router.get("/professor", ProfessorControllers.listarTodos)
router.post("/professor", ProfessorControllers.criar)
router.put("/professor/:matricula", ProfessorControllers.editar)
router.get("/professor/:matricula", ProfessorControllers.listarPorMatricula)
router.delete("/professor/:matricula", ProfessorControllers.excluirPorMatricula)
router.delete("/professsor", ProfessorControllers.excluirTodos)

module.exports = router