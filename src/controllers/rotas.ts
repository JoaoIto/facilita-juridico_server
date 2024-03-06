import { pool } from '../config/db'; // Importe a pool de conexão com o banco de dados
import {caixeiroViajante} from '../functions/rotasCalc'

export class RotaController {
    static async calcularRota(req, res) {
        try {
            console.log('Calculando rota do caixeiro viajante...');

            // Consulta SQL para obter as coordenadas dos clientes
            const query = 'SELECT coordenada_x, coordenada_y FROM clientes';

            // Executa a consulta ao banco de dados
            const { rows } = await pool.query(query);

            // Armazena as coordenadas dos clientes em um array de objetos
            const clientes = rows.map(row => ({ x: row.coordenada_x, y: row.coordenada_y }));

            // Adicione a coordenada da empresa (0,0) ao array de clientes
            clientes.push({ x: 0, y: 0 });

            // Calcule a rota do caixeiro viajante
            const rota = caixeiroViajante(clientes);

            console.log('Rota calculada:', rota);

            res.status(200).json({ message: 'Rota do caixeiro viajante calculada com sucesso', rota });
        } catch (error) {
            console.error('Erro ao calcular rota do caixeiro viajante', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
