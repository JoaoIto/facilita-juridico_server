import express from 'express';
import cors from 'cors';
import { ClientesRouter } from './routes/clientes';
import {UsuariosRouter} from "./routes/login";

const app = express();
const port = 8080;

// Middleware para fazer o parse do corpo da requisição como JSON
app.use(express.json());

// Habilitar o CORS para todos os endpoints
app.use(cors());

//Incluir rota de login
app.use('/login', UsuariosRouter)
// Incluir as rotas de clientes
app.use('/clientes', ClientesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}\n`);
});
