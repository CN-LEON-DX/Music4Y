import { Express } from "express";

import { topicRoutes } from "./topic.route";
import { homeRoutes } from "./home.route";
import { genreRoutes } from "./genre.route";
import { playlistRoutes } from "./playlist.route";
import { showRoutes } from "./show.route";
import { songRoutes } from "./song.route";
import { authRoutes } from "./auth.route";
import { authMiddleware } from "../../middlewares/auth.middleware";

const clientRoutes = (app: Express): void => {
  app.use(authMiddleware);

  app.use("/", homeRoutes);

  app.use("/topics", topicRoutes);
  app.use("/genre", genreRoutes);
  app.use("/playlist", playlistRoutes);
  app.use("/song", songRoutes);
  app.use("/show", showRoutes);
  app.use("/user", authRoutes);
};

export default clientRoutes;
