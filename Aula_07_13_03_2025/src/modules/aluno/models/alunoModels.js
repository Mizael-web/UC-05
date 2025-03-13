const {pool}= require ("../../../modules/aluno")


class  Aluno {

   static async criar(matricula, nome, email, senha){
       const dados = [matricula, nome, email, senha]
       const consulta = `insert into aluno (matricula, nome, email, senha) values ( $1, $2, $3, $4) retuning *`
       const novoAluno = await pool.query(consulta, dados)
       return novoAluno.rows    

   }
   static async editar(matricula, nome, email, senha){
       const dados = [matricula, nome, email, senha]
       const consulta = `update aluno set  nome=$2, email=$3, senha=$4 where matricula = $1 returning *`
       const alunoAtualizado = await pool.query(consulta, dados)
       return alunoAtualizado.rows    

   }
   static async listar (){
      const consulta =`select * from aluno`
      const aluno = await pool.query(consulta)
      return aluno.rows

   }
   static async listarPorID(matricula){
    const dados = [matricula]
    const consulta =`select * from aluno where matricula = $1`
    const aluno = await pool.query(consulta, dados)
    return aluno.rows

   }
   static excluirTodos(){
      const consulta = `delete *from aluno`
      await pool.query(consulta)

   }
   static excluirPorID(matricula){
   const dados = [matricula]
   const consulta = `delete * from aluno where matricula = $1`
   await pool.query(consulta, dados)
 
   }
}
 moudele.express = Aluno