import { Router, Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Category from "../../models/category.model";

const router: Router = Router();

export const detail = async (req: Request, res: Response) => {

  let playlistID = req.params.playlistID;
  console.log(playlistID);

  res.render("client/pages/playlist/detail", {
    pageTitle: "Playlist",
  });
};
