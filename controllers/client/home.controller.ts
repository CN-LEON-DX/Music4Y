import { Router, Request, Response } from "express";
import Topic from "../../models/topic.model";

const router: Router = Router();

export const home = async (req: Request, res: Response) => {
  const topics = await Topic.find({
    deleted: false,
  });
  res.render("client/pages/home/index", {
    pageTitle: "Home",
  });
};

