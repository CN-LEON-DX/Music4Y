
import { Express } from "express";

import { topicRoutes } from "./topic.route";
import { homeRoutes } from "./home.route";

const clientRoutes = (app:Express): void => {

    app.use("/", homeRoutes);

    app.use("/topics", topicRoutes);
}

export default clientRoutes; 