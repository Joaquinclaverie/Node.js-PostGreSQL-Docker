const { Pool } = require('pg');

const config = {
    user: 'pruebasusr',
    host: 'localhost',
    password: 'password',
    database: 'pruebas'
};

const pool = new Pool(config);
