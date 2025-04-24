import { games } from "../data.js";

//Pega todos os valores de uma propriedade de cada objeto no array e retorna
export const extractUniqueValues = (property) => {
    return [...new Set(
      games.flatMap(game => 
        Array.isArray(game[property]) ? game[property] : [game[property]]
      )
    )];
  };
  