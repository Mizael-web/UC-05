const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NOME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORTA,
    ssl: {
        rejectUnauthorized: false, // Desabilita a verificação de certificado (use com cautela)
        // Caso você tenha arquivos de certificado SSL específicos, pode incluir:
        // ca: fs.readFileSync('path_to_ca_certificate.pem'),
        // cert: fs.readFileSync('path_to_client_certificate.pem'),
        // key: fs.readFileSync('path_to_client_key.pem'),
    }
});

module.exports = { pool };
