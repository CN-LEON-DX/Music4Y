import { Router } from "express";

const router: Router = Router();

import * as controller from "../../controllers/client/song.controller";

router.get("/:title/:id/", controller.detail);


export const songRoutes: Router = router;
