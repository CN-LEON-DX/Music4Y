import { Router, Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Category from "../../models/category.model";
import Playlist from "../../models/playlist.model";
import Genre from "../../models/genre.model";
import Singer from "../../models/singer.model";

const router: Router = Router();

export const detail = async (req: Request, res: Response) => {
  let title = req.params.title;
  let id = req.params.id;
  // console.log(playlistID);/
  try {
    const song = await Song.findOne({
      deleted: false,
      _id: id,
    });

    const singer = await Singer.findOne({ deleted: false, _id: song.singerID });

    res.render("client/pages/song/detail", {
      pageTitle: title,
      song: song,
      singer: singer,
    });
  } catch (error) {
    console.log(error);
  }
};


