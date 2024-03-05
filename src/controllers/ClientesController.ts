import {pool} from '../config/db';

export class ClientesController {
    static async listarClientes(req, res) {
        try {
            const query = 'SELECT * FROM clientes';
            const { rows } = await pool.query(query);
            res.status(200).json(rows);
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
