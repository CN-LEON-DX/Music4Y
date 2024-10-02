import { Router } from "express";

const router: Router = Router();

import * as controller from "../../controllers/client/genre.controller";

router.get("/:slugTopic/:topicID", controller.listTopic);
router.get("/sub/:slugTitle/:genreID", controller.genre);

export const genreRoutes: Router = router;
