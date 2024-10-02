import { Router } from "express";

const router: Router = Router();


import * as controller from "../../controllers/client/song.controller";

router.get("/:slugTopic/:topicID", controller.list);


export const songRoutes: Router = router;
