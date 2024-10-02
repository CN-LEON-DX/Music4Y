import { Express } from "express";

import { topicRoutes } from "./topic.route";
import { homeRoutes } from "./home.route";
import { genreRoutes } from "./genre.route";
import { playlistRoutes } from "./playlist.route";

const clientRoutes = (app: Express): void => {
  app.use("/", homeRoutes);

  app.use("/topics", topicRoutes);
  app.use("/genre", genreRoutes);
  app.use("/playlist", playlistRoutes);
};

export default clientRoutes;
