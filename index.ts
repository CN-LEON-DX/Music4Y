import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use("/topics", (req: Request, res: Response) => {
  res.send("List topic");
});

app.listen(port, () => {
  console.log("App listening at port " + port);
});
