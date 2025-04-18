import { games } from "../data.js";

export function filterByGenre(genre){
    // Converte a primeira letra em maiúscula e as seguintes letras da string em minúscula
    const capitalizedGenre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();

    // Retorna os objetos que contenham o genêro escolhido  
    return games.filter((obj) => obj.genres.includes(capitalizedGenre));
};