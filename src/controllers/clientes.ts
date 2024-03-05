import {pool} from '../config/db';

export class ClientesController {
    static async listarClientes(req, res) {
        try {
            console.log('Buscando clientes...');
            const query = 'SELECT * FROM clientes';
            const { rows } = await pool.query(query);
            console.log('Clientes encontrados:', rows);
            res.status(200).json({message: "Listando clientes: ", rows});
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    static async criarClientes(req, res) {
        try {
            console.log('Criando cliente:', req.body);

            const { nome, email, telefone } = req.body;

            // Verifica se os dados do cliente estão presentes na requisição
            if (!nome || !email || !telefone) {
                return res.status(400).json({ error: 'Nome, email e telefone são obrigatórios' });
            }

            // Insere o novo cliente no banco de dados
            const query = 'INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *';
            const values = [nome, email, telefone];
            const { rows } = await pool.query(query, values);

            console.log('Cliente criado:', rows[0]);

            res.status(201).json({ message: 'Cliente criado com sucesso', cliente: rows[0] });
        } catch (error) {
            console.error('Erro ao criar cliente', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    static async filtrarClientes(req, res) {
        try {
            console.log('Filtrando clientes:', req.query);

            // Constrói a consulta SQL com base nos parâmetros de consulta
            let query = 'SELECT * FROM clientes WHERE true';
            const values = [];

            if (req.query.nome) {
                query += ` AND nome ILIKE '%${req.query.nome}%'`;
            }
            if (req.query.email) {
                query += ` AND email ILIKE '%${req.query.email}%'`;
            }
            if (req.query.telefone) {
                const telefone = String(req.query.telefone).replace(/'/g, "''");
                query += ` AND telefone ILIKE '%${telefone}%'`;
            }

            const { rows } = await pool.query(query);
            console.log('Clientes filtrados:', rows);

            res.status(200).json(rows);
        } catch (error) {
            console.error('Erro ao filtrar clientes', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
