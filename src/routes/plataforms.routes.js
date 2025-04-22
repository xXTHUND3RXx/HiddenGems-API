import { Router } from "express";
import { games } from "../data.js";
import { extractUniqueValues } from "../utils/extractUniqueValue.js";
import { filterByProperty } from "../utils/filterByProperty.js";

const platformRoute = Router();

platformRoute.get("/", (req, res) => {
  const gamePlatform = extractUniqueValues(games, "platforms");

  res.status(200).send({ platforms: gamePlatform });
});

platformRoute.get("/:platform", (req, res) => {
  const { platform } = req.params;

  // const namePlatform = games.filter((obj) => {
  //     return Array.isArray && obj.platforms.some((p) => p?.toLowerCase().startsWith(platform.toLowerCase()));
  // });

  const namePlatform = filterByProperty("platforms", platform);

  res.status(200).send({ plataforms: namePlatform });
});

export default platformRoute;
