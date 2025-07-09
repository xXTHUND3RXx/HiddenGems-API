import express from "express";
import cors from 'cors';
import gameRoute from "./routes/game.routes.js";
import genreRoute from "./routes/genre.routes.js";
import nameRoute from "./routes/name.routes.js";
import platformRoute from "./routes/platforms.routes.js";

const app = express();
const PORT = 3000;

app.use(cors()); 

// Rota principal, mostra todos os jogos listados no data.js
app.use("/games", gameRoute);

// Rota dos nomes, mostra o nome de todos os jogos
app.use("/games/names", nameRoute);

// Rota dos generos, mostra os genêros de todos os jogos
app.use("/games/genres", genreRoute);

// Rotas das plataformas, mostra as plataformas de todos os jogos
app.use("/games/platforms", platformRoute)

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));