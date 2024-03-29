// Middleware para autenticação
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY || 'defaultSecretKey';

export const authenticateToken = (req, res, next) => {
    // Obter o token JWT do cabeçalho da requisição
    const token = req.headers['authorization'];

    // Verificar se o token está presente
    if (!token) {
        return res.status(401).json({ error: 'Token de autenticação não fornecido' });
    }

    // Verificar se o token é válido
    jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return res.status(403).json({ error: 'Token de autenticação inválido' });
        }
        // Se o token for válido, prosseguir para o próximo middleware
        req.user = decoded;
        next();
    });
};
