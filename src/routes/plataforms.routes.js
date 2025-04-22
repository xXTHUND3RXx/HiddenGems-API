import { Router } from "express";
import { extractUniqueValues } from "../utils/extractUniqueValue.js";
import { filterByProperty } from "../utils/filterByProperty.js";

const platformRoute = Router();

platformRoute.get("/", (req, res) => {
  const gamePlatform = extractUniqueValues("platforms");

  res.status(200).send({ platforms: gamePlatform });
});

platformRoute.get("/:platform", (req, res) => {
  const { platform } = req.params;

  const namePlatform = filterByProperty("platforms", platform);

  res.status(200).send({ plataforms: namePlatform });
});

export default platformRoute;
