import { Router, Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Category from "../../models/category.model";
import Playlist from "../../models/playlist.model";
import Genre from "../../models/genre.model";
import Podcast from "../../models/podcast.model";

const router: Router = Router();

export const detail = async (req: Request, res: Response) => {
  let slug = req.params.slugItem;
  // console.log(playlistID);/

  let genre = req.params.genreName;

  console.log(slug);
  console.log(genre);

  if (genre === "podcast") {
    let podcast = await Podcast.findOne({
      deleted: false,
      slug: slug,
    });

    console.log(podcast);
    res.render("client/pages/show/detail", {
      pageTitle: "Playlist",
      podcast: podcast,
    });
  } else res.send("Not found 404");
};
