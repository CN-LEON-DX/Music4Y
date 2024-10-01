import { Router, Request, Response } from "express";
import Topic from "../../models/topic.model";

const router: Router = Router();

export const topics = async (req: Request, res: Response) => {
  const topics = await Topic.find({
    deleted: false,
  });
  console.log(topics);
  res.render("client/pages/topics/index");
};

export const detail = async (req: Request, res: Response) => {
  const topics = await Topic.find({
    deleted: false,
  });
  console.log(topics);
  res.render("client/pages/topics/detail");
};
