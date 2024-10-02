
import { Request, Response, Router } from "express";

const router: Router = Router();


import * as controller from "../../controllers/client/home.controller";

router.get("/", controller.home);


export const homeRoutes: Router = router;
