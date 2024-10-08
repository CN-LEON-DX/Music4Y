import { Router } from "express";

const router: Router = Router();


import * as controller from "../../controllers/client/topic.controller";

router.get("/", controller.topics);
router.get("/detail", controller.detail);


export const topicRoutes: Router = router;
