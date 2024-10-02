import { Express } from "express";

import { topicRoutes } from "./topic.route";
import { homeRoutes } from "./home.route";
// import { songRoutes } from "./song.route";
import { genreRoutes } from "./genre.route";

const clientRoutes = (app: Express): void => {
  app.use("/", homeRoutes);

  app.use("/topics", topicRoutes);
//   app.use("/songs", songRoutes);
  app.use("/genre", genreRoutes);
};

export default clientRoutes;
