import { Router } from "express";
import { filterByProperty } from "../utils/filterByProperty.js";
import { extractUniqueValues } from "../utils/extractUniqueValue.js";

const genreRoute = Router();

// Lista todos os gêneros dos jogos
genreRoute.get("/", (req, res) => {
  const uniqueGenre = extractUniqueValues("genres");

  res.status(200).send({ genres: uniqueGenre });
});

genreRoute.get('/:genre', (req, res) => {
    const {genre} = req.params;

    // Chama a função que permite cria um novo array com os objetos que tenham o genêro digitado no parâmetro
    const gameGenre = filterByProperty('genres', genre);

    res.status(200).send({ Genres: gameGenre})
})

export default genreRoute;
