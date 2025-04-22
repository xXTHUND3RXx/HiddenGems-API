import express from 'express';
import gameRoute from './routes/game.routes.js';
import genreRoute from './routes/genre.routes.js';
import nameRoute from './routes/name.routes.js';
import platformRoute from './routes/plataforms.routes.js';

const app = express();
const PORT = 3000;

// Rota principal, mostra todos os jogos listados no data.js
app.use('/', gameRoute);

// Rota dos nomes, mostra o nome de todos os jogos
app.use('/name', nameRoute);

// Rota dos generos, mostra os genêros de todos os jogos
app.use('/genre', genreRoute);

app.use('/platforms', platformRoute)

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));