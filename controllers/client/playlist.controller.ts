import { Router, Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Category from "../../models/category.model";
import Playlist from "../../models/playlist.model";
import Genre from "../../models/genre.model";

const router: Router = Router();

export const detail = async (req: Request, res: Response) => {
  let genreID = req.params.genreID;
  // console.log(playlistID);/

  const playlist = await Playlist.find({
    deleted: false,
    genreID: genreID,
  });
  const genre = await Genre.findOne({
    _id: genreID,
  });

  res.render("client/pages/playlist/detail", {
    pageTitle: "Playlist",
    playlist: playlist,
    genre: genre,
  });
};
