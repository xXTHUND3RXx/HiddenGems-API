//Pega todos os valores de uma propriedade de cada objeto no array
export const extractUniqueValues = (games, property) => {
    return [...new Set(
      games.flatMap(game => 
        Array.isArray(game[property]) ? game[property] : [game[property]]
      )
    )];
  };
  