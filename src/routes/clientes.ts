import express from 'express';
import { Clientes } from '../controllers/clientes';

export const ClientesRouter = express.Router();

ClientesRouter.get('/', Clientes.listarClientes);
ClientesRouter.post('/cadastrar', Clientes.criarClientes);
