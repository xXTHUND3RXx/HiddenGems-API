import { games } from "../data.js";

export function filterByProperty(property, nameProperty){
    // Converte a primeira letra em maiúscula e as seguintes letras da string em minúscula
    const capitalizedGenre = nameProperty.charAt(0).toUpperCase() + nameProperty.slice(1).toLowerCase();

    // Retorna os objetos que contenham a propriedade escolhida e verifica se essa propriedade é um array ou não
    return games.filter((obj) => {
        const prop = obj[property];
        
        if (Array.isArray(prop)) {
            return prop.some((p) => p.toLowerCase().startsWith(capitalizedGenre.toLowerCase()));
        } else if (typeof prop === 'string') {
            return prop.toLowerCase().startsWith(capitalizedGenre.toLowerCase());
        }
    });
}  

