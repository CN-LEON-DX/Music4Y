import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";


// setup env
dotenv.config();
// end env

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

// connect to database
database.connect();


// pug usage
app.set("views", "./views");
app.set("view engine", "pug");
// end pug

app.use("/topics", (req: Request, res: Response) => {
  res.render("client/pages/topics/index");
});

app.listen(port, () => {
  console.log("App listening at port " + port);
});
