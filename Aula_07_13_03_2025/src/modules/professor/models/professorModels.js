const {pool}= require ("../../../modules/professor")


class  professorModel {

   static async criar(matricula, nome, email, senha){
       const dados = [matricula, nome, email, senha]
       const consulta = `insert into Professor (matricula, nome, email, senha) values ( $1, $2, $3, $4) retuning *`
       const novoProfessor = await pool.query(consulta, dados)
       return novoProfessor.rows    

   }
   static async editar(matricula, nome, email, senha){
       const dados = [matricula, nome, email, senha]
       const consulta = `update professor set  nome=$2, email=$3, senha=$4 where matricula = $1 returning *`
       const professorAtualizado = await pool.query(consulta, dados)
       return professorAtualizado.rows    

   }
   static async listar (){
      const consulta =`select * from professor`
      const aluno = await pool.query(consulta)
      return aluno.rows

   }
   static async listarPorID(matricula){
    const dados = [matricula]
    const consulta =`select * from professor where matricula = $1`
    const aluno = await pool.query(consulta, dados)
    return aluno.rows

   }

   static excluirPorID(matricula){
   const dados = [matricula]
   const consulta = `delete * from professor where matricula = $1`
   await pool.query(consulta, dados)
 
   }

   static excluirTodos(){
      const consulta = `delete *from professor`
      await pool.query(consulta)

   }
}
 module.exports = professorModel