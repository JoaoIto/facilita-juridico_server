import express from 'express';
import cors from 'cors';
import { ClientesRouter } from './routes/clientes';

const app = express();
const port = 8080;

// Middleware para fazer o parse do corpo da requisição como JSON
app.use(express.json());

// Habilitar o CORS para todos os endpoints
app.use(cors());

// Incluir as rotas de clientes
app.use('/clientes', ClientesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}\n`);
});
