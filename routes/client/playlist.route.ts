import { Router } from "express";

const router: Router = Router();

import * as controller from "../../controllers/client/playlist.controller";

router.get("/:playlistID", controller.detail);


export const playlistRoutes: Router = router;
