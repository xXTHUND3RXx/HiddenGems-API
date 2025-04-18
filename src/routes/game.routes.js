import { Router } from "express";
import { games } from "../data.js";

const gameRoute = Router();

gameRoute.get('/', (req, res) => {
    res.status(200).send({games: games})
});

export default gameRoute;