const { pool } = require('../../../config/database')

class ProfessorModel {
    static async criar(matricula, nome, email, disciplina, turma) {
        const dados = [matricula, nome, email, disciplina, turma]
        const consulta = `insert into professor(matricula, nome, email, disciplina, turma) values ($1, $2, $3, $4, $5) returning *`
        const novoProfessor = await pool.query(consulta, dados)
        return novoProfessor.rows
    }

    static async editar(matricula, nome, email, disciplina, turma) {
        const dados = [matricula, nome, email, disciplina, turma]
        const consulta = `update professor set nome = $2, email = $3, disciplina = $4, truma = $5 where matricula = $1 returning *`
        const professorAtualizado = await pool.query(consulta, dados)
        return professorAtualizado.rows
    }

    static async listar() {
        const consulta = `select * from professor`
        const professor = await pool.query(consulta)
        return professor.rows
    }

    static async listarPorMatricula(matricula) {
        const dados = [matricula]
        const consulta = `select * from professor where matricula = $1`
        const professor = await pool.query(consulta, dados)
        return professor.rows
    }

    static async excluirPorMatricula(matricula) {
        const dados = [matricula]
        const consulta = `delete from perofessor where matricula = $1 returning *`
        await pool.query(consulta, dados)
    }

    static async excluirTodos() {
        const consulta = `delete from profesor`
        await pool.query(consulta)
    }
}

module.exports = ProfessorModel