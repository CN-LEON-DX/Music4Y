
import {  Router } from "express";

const router: Router = Router();


import * as controller from "../../controllers/client/show.controller";

router.get("/:genreName/:slugItem", controller.detail);

export const showRoutes: Router = router;
