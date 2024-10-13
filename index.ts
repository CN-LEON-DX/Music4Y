import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import Topic from "./models/topic.model";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cookieParser from "cookie-parser";
import session from "express-session"; // Import the 'session' module

import methodOverride from "method-override";

import clientRoutes from "./routes/client/index.route";

// setup env
dotenv.config();
// end env

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

// connect to database
database.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

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
