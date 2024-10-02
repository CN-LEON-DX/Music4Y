import { Router, Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Category from "../../models/category.model";

const router: Router = Router();

// GET /song/:slugTopic:topicID
export const list = async (req: Request, res: Response) => {
  let slug = req.params.slugTopic;
  let topicID = req.params.topicID;

  console.log(slug);
  // let find some category
  let categories = await Category.find({
    deleted: false,
    topicID: topicID,
  });

  res.render("client/pages/category/list", {
    pageTitle: slug ? slug : "Songs",
    categories,
  });
};
