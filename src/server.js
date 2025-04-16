import express from 'express';
import gameRoute from './routes/game.routes.js';

const app = express();
const PORT = 3000;

app.use('/', gameRoute)

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));