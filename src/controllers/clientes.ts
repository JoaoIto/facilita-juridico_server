import {pool} from '../config/db';

export class ClientesController {
    static async listarClientes(req, res) {
        try {
            console.log('Buscando clientes...');
            const query = 'SELECT * FROM clientes';
            const {rows} = await pool.query(query);
            console.log('Clientes encontrados:', rows);
            res.status(200).json({message: "Listando clientes: ", rows});
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            res.status(500).json({error: 'Erro interno do servidor'});
        }
    }

    static async criarClientes(req, res) {
        try {
            console.log('Criando cliente:', req.body);

            const {nome, email, telefone, coordenada_x, coordenada_y} = req.body; // Certifique-se de incluir os campos de coordenadas aqui

            // Verifica se os dados do cliente estão presentes na requisição
            if (!nome || !email || !telefone || !coordenada_x || !coordenada_y) {
                return res.status(400).json({error: 'Nome, email, telefone, coordenada X e coordenada Y são obrigatórios'});
            }

            /// Verifica se o formato do telefone é válido
            const telefoneValido = /^\d{11}$/.test(telefone);
            if (!telefoneValido) {
                console.log({error: 'Formato de telefone inválido'})
                return res.status(400).json({ error: 'Formato de telefone inválido' });
            }

            // Verifica se já existe um cliente com o mesmo telefone ou email
            const clienteExistente = await pool.query('SELECT * FROM clientes WHERE email = $1 OR telefone = $2', [email, telefone]);
            console.log(clienteExistente);

            if (clienteExistente.rowCount > 0) {
                console.log({error: 'Cliente com mesmo email ou telefone já cadastrado'})
                return res.status(400).json({error: 'Cliente com mesmo email ou telefone já cadastrado'});
            }

            // Insere o novo cliente no banco de dados, incluindo as coordenadas
            const query = 'INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5) RETURNING *'; // Altere os nomes dos campos de coordenadas conforme a estrutura da sua tabela
            const values = [nome, email, telefone, coordenada_x, coordenada_y];
            const {rows} = await pool.query(query, values);

            console.log('Cliente criado:', rows[0]);

            res.status(201).json({message: 'Cliente criado com sucesso', cliente: rows[0]});
        } catch (error) {
            console.error('Erro ao criar cliente', error);
            res.status(500).json({error: 'Erro interno do servidor'});
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
            if (req.query.coordenada_x) {
                query += ` AND coordenada_x = ${req.query.coordenada_x}`;
            }
            if (req.query.coordenada_y) {
                query += ` AND coordenada_y = ${req.query.coordenada_y}`;
            }

            const {rows} = await pool.query(query);
            console.log('Clientes filtrados:', rows);

            res.status(200).json({message: "Listando clientes filtrados: ", rows});
        } catch (error) {
            console.error('Erro ao filtrar clientes', error);
            res.status(500).json({error: 'Erro interno do servidor'});
        }
    }
}
