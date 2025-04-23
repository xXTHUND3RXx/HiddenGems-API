import { Router } from "express";
import { extractUniqueValues } from "../utils/extractUniqueValue.js";
import { filterByProperty } from "../utils/filterByProperty.js";

const platformRoute = Router();

// Lista todas as plataformas disponiveis
platformRoute.get("/", (req, res) => {
  const gamePlatform = extractUniqueValues("platforms");

  res.status(200).send({ platforms: gamePlatform });
});

// Permite procurar o jogo pela plataforma digitada no parâmetro
platformRoute.get("/:platform", (req, res) => {
  const { platform } = req.params;

  const namePlatform = filterByProperty("platforms", platform);

  res.status(200).send({ platforms: namePlatform });
});

export default platformRoute;
