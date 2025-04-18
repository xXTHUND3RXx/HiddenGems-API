import { Router } from "express";
// import { games } from "../data.js"; COMENTARIO PARA TESTAR SE CONTINUA FUNCIOANDO
import { filterByGenre } from "../utils/filterByGenre.js";

const genreRoute = Router();

genreRoute.get ('/', (req, res) => {
    // Elimina valores duplicados
    const allGenres = new Set();

    // Percorre cada objeto de jogo no array games e a cada jogo acessa games.genre
    games.forEach(game => {
        // Percorre cada genêro individualmente e adiciona esse genêro ao Set
        game.genres.forEach(genre => allGenres.add(genre));
    })

    // Converte o Set em array e envia a resposta para o servidor
    res.send({ genres: Array.from(allGenres) });
});

genreRoute.get('/action',(req, res) => {
    // Chama a função que permite cria um novo array com os objetos que tenham o genêro ação
    const genreAction = filterByGenre('Action');
    
    res.send({ genreAction });
});

genreRoute.get('/adventure', (req, res) => {
    const genreAdventure = filterByGenre('Adventure');

    res.send({ genreAdventure });
});

genreRoute.get('/Platformer', (req, res) => {
    const genrePlatformer = filterByGenre('Platformer');

    res.send({ genrePlatformer })
})

export default genreRoute;