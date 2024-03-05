import { pool } from '../config/db';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const secretKey = process.env.SECRET_KEY || 'defaultSecretKey';

export class UserController {
    static async login(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;

            // Verificar se o email e a senha foram fornecidos
            if (!email || !senha) {
                return res.status(400).json({ error: 'Email e senha são obrigatórios' });
            }

            // Consultar o usuário no banco de dados pelo email
            const query = 'SELECT * FROM usuarios WHERE email = $1';
            const { rows } = await pool.query(query, [email]);

            // Verificar se o usuário existe
            if (rows.length === 0) {
                return res.status(401).json({ error: 'Usuário não encontrado' });
            }

            const usuario = rows[0];

            // Verificar se a senha está correta
            if (senha !== usuario.senha) {
                return res.status(401).json({ error: 'Senha incorreta' });
            }

            // Gerar o token JWT para o usuário
            const token = jwt.sign({ id: usuario.id, email: usuario.email }, secretKey, { expiresIn: '1h' });

            // Retornar o token JWT para o cliente
            res.status(200).json({ token });
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
};
