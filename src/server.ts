import express from 'express';
import cors from 'cors';
import {ClientesController} from "./controllers/ClientesController";

const app = express();
const port = 8080;
// Habilitar o CORS para todos os endpoints
app.use(cors());
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/', async (req, res) => {
    res.json({message: "Hello World!"})
})

app.get('/clientes', ClientesController.listarClientes);

