import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import Topic from "./models/topic.model";

import clientRoutes from "./routes/client/index.route";

// setup env
dotenv.config();
// end env

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

// connect to database
database.connect();

app.use(express.static(`${__dirname}/public`));

// pug usage
app.set("views", "./views");
app.set("view engine", "pug");
// end pug

// using router
clientRoutes(app);

app.listen(port, () => {
  console.log("App listening at port " + port);
});
