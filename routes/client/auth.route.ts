import { Router } from "express";

const router: Router = Router();

import * as controller from "../../controllers/client/auth.controller";
import { userMiddleware } from "../../middlewares/user.middleware";

router.get("/login", controller.login);
router.post("/login", controller.loginPost);
router.get("/register", controller.register);
router.post("/register", controller.registerPost);
router.get("/verify/otp", controller.verifyOtp);
router.post("/verify/otp", controller.verifyOtpPost);
router.get("/logout", controller.logOut);

router.get("/infor/:id", userMiddleware, controller.inforUser);

export const authRoutes: Router = router;
