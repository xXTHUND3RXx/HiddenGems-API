import { Router } from "express";
import { extractUniqueValues } from "../utils/extractUniqueValue.js";
import { filterByProperty } from "../utils/filterByProperty.js";

const nameRoute = Router();

nameRoute.get('/', (req, res) => {
    const uniqueName = extractUniqueValues("name")

    res.status(200).send({ names: uniqueName })
})

nameRoute.get('/:name', (req, res) => {
    // Pega o nome digitado no parâmetro
    const {name} = req.params;

    //Cria um novo array e filtra os objetos que tenham o nome digitado ou partes desse nome
    const gameName = filterByProperty("name", name)

    // Verifica se o array está vazio, e se ele estiver vazio envia uma mensagem de erro
    if(gameName.length === 0) {
        return res.status(404).send({ message: 'Esse jogo ainda não existe no nosso banco de dados :)' })
    }

    res.status(200).send({ gameName })
})

export default nameRoute;