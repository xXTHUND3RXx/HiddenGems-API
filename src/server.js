import express from 'express';
import gameRoute from './routes/game.routes.js';
import genreRoute from './routes/genre.routes.js';
import nameRoute from './routes/name.routes.js';

const app = express();
const PORT = 3000;

app.use('/', gameRoute);

app.use('/name', nameRoute);

app.use('/genre', genreRoute);

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));