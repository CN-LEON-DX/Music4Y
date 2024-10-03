import { Router, Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Category from "../../models/category.model";
import Playlist from "../../models/playlist.model";
import Genre from "../../models/genre.model";
import Postcard from "../../models/postcard.model";

const router: Router = Router();

export const detail = async (req: Request, res: Response) => {
  let slug = req.params.slugItem;
  // console.log(playlistID);/

  let genre = req.params.genreName;
  console.log(genre);
  
  if (genre == "postcard"){
    const item = await Postcard.findOne({
        deleted: false,
        slug: slug,
    })

    console.log(item);
  }

  res.render("client/pages/show/detail", {
    pageTitle: "Playlist",
  });
};
