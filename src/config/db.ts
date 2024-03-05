import { Pool } from 'pg';

export const pool = new Pool({
    user: 'facilita-juridico',
    host: 'localhost',
    database: 'facilita-juridico',
    password: '2308',
    port: 5432, // Porta padrão do PostgreSQL
});
