import express from 'express';
import {UserController} from "../controllers/usuarios";

export const UsuariosRouter = express.Router();

UsuariosRouter.post('/', UserController.login);
