const { pool } = require('./database');

async function criarTabelas() {
    try {
        // Criar tabela aluno
        await pool.query(`
            CREATE TABLE IF NOT EXISTS aluno (
                matricula SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                senha VARCHAR(255) NOT NULL
            );
        `);

        // Criar tabela endereco
        await pool.query(`
            CREATE TABLE IF NOT EXISTS endereco (
                id SERIAL PRIMARY KEY,
                matricula INTEGER NOT NULL REFERENCES aluno(matricula) ON DELETE CASCADE,
                cep VARCHAR(10) NOT NULL,
                logradouro VARCHAR(255) NOT NULL,
                numero VARCHAR(10) NOT NULL,
                complemento VARCHAR(255),
                bairro VARCHAR(255) NOT NULL,
                localidade VARCHAR(255) NOT NULL,
                uf VARCHAR(2) NOT NULL,
                ponto_referencia VARCHAR(255)
            );
        `);

        console.log('Tabelas criadas com sucesso!');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    } finally {
        pool.end();
    }
}
// executar esse arquivo com 'node criar_tabela_com_pg.js'
criarTabelas();