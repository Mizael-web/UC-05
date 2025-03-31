// Importando com (commonjs)
const express = require("express")
const debug = require('debug')('app');
const dotenv = require("dotenv");
const alunoEndereco = require("./src/modules/aluno/routes/index")
const routerEndereco = require ("./src/modules/endereco/routes/enderecoRoutes")
dotenv.config();

const port = process.env.PORTA;
const app = express();

// Aplicação use express como json(javascript object notation)
app.use(express.json());

app.use(alunoRoutes)
app.use (enderecoRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
