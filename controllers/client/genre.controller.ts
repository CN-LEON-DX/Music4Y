import { Router, Request, Response } from "express";
import Song from "../../models/song.model";
import Genre from "../../models/genre.model";
import Category from "../../models/category.model";

const router: Router = Router();

// GET /gênre/sub/:slugTitle:genreID
export const genre = async (req: Request, res: Response) => {
  let title = req.params.slugTitle;
  let genreID = req.params.genreID;
  console.log(title);
  console.log(genreID);

  const genre = await Genre.find({
    deleted: false,
    categoryID: genreID,
  });

  console.log(genre);

  title = title[0].toUpperCase() + title.slice(1).toLowerCase();
  res.render("client/pages/genre/index", {
    pageTitle: title ? title : "Songs",
    genres: genre,
  });
};

// GET /gênre/:slugTopic:topicID
export const listTopic = async (req: Request, res: Response) => {
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
