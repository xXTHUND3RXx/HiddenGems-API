import { Router } from "express";
import { games } from "../data.js";
import { filterByGenre } from "../utils/filterByGenre.js";
import { extractUniqueValues } from "../utils/extractUniqueValue.js";

const genreRoute = Router();

genreRoute.get ('/', (req, res) => {
    const uniqueGenre = extractUniqueValues(games, 'genres')

    res.status(200).send({ genres: uniqueGenre });
});

genreRoute.get('/action',(req, res) => {
    // Chama a função que permite cria um novo array com os objetos que tenham o genêro ação
    const genreAction = filterByGenre('Action');
    
    res.status(200).send({ genreAction });
});

genreRoute.get('/adventure', (req, res) => {
    const genreAdventure = filterByGenre('Adventure');

    res.status(200).send({ genreAdventure });
});

genreRoute.get('/Platformer', (req, res) => {
    const genrePlatformer = filterByGenre('Platformer');

    res.status(200).send({ genrePlatformer })
})

export default genreRoute;