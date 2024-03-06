import express from 'express';
import { ClientesController } from '../controllers/clientes';
import {authenticateToken} from "../middleware/authenticateToken";
import {RotaController} from "../controllers/rotas";

export const ClientesRouter = express.Router();

ClientesRouter.get('/', authenticateToken, ClientesController.listarClientes);
ClientesRouter.post('/cadastrar', authenticateToken, ClientesController.criarClientes);
ClientesRouter.get('/filtro', authenticateToken, ClientesController.filtrarClientes);

// Rota para calcular a rota do caixeiro viajante
ClientesRouter.get('/rota', authenticateToken, RotaController.calcularRota);