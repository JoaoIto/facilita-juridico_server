import express from 'express';
import { ClientesController } from '../controllers/clientes';

export const ClientesRouter = express.Router();

ClientesRouter.get('/', ClientesController.listarClientes);
ClientesRouter.post('/cadastrar', ClientesController.criarClientes);
ClientesRouter.get('/filtro', ClientesController.filtrarClientes);