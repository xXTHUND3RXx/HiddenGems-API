import { games } from "../data.js";

// export function filterByGenre(genre){
//     // Converte a primeira letra em maiúscula e as seguintes letras da string em minúscula
//     const capitalizedGenre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();

//     // Retorna os objetos que contenham o genêro escolhido  
//     return games.filter((obj) => obj.genres.includes(capitalizedGenre));
// };

export function filterByProperty(property, nameProperty){
    // Converte a primeira letra em maiúscula e as seguintes letras da string em minúscula
    const capitalizedGenre = nameProperty.charAt(0).toUpperCase() + nameProperty.slice(1).toLowerCase();

    // Retorna os objetos que contenham o genêro escolhido  
    return games.filter((obj) => obj[property].some((p) => p.toLowerCase().startsWith(capitalizedGenre.toLowerCase())));;
};

