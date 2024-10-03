import { Router } from "express";

const router: Router = Router();

import * as controller from "../../controllers/client/playlist.controller";

router.get("/:genreID", controller.detail);


export const playlistRoutes: Router = router;
