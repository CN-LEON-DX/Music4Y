import { Express } from "express";

import { topicRoutes } from "./topic.route";
import { homeRoutes } from "./home.route";
import { genreRoutes } from "./genre.route";
import { playlistRoutes } from "./playlist.route";
import { showRoutes } from "./show.route";
import { songRoutes } from "./song.route";

const clientRoutes = (app: Express): void => {
  app.use("/", homeRoutes);

  app.use("/topics", topicRoutes);
  app.use("/genre", genreRoutes);
  app.use("/playlist", playlistRoutes);
  app.use("/song", songRoutes);
  app.use("/show", showRoutes);
};

export default clientRoutes;
