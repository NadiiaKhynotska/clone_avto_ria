import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { commonMiddleware } from "../middlewares/commonMiddleware";
import { userMiddleware } from "../middlewares/user.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.post(
  "/register",
  commonMiddleware.isBodyValid(UserValidator.register),
  userMiddleware.isEmailUniq,
  authController.register,
);
// router.post(
//     "/login",
//     commonMiddleware.isBodyValid(UserValidator.login),
//     authController.login,
// );
// router.post(
//     "/refresh",
//     authMiddleware.isRefreshTokenValid,
//     authController.refresh,
// );
//
// router.post(
//     "/logout",
//     authMiddleware.isAccessTokenValid,
//     authController.logout,
// );
//
// router.post(
//     "/logout-all",
//     authMiddleware.isAccessTokenValid,
//     authController.logoutAll,
// );
//
// router.put("/activate", authController.activate);
//
// router.post(
//     "/activate",
//     authMiddleware.isAccessTokenValid,
//     authController.sendActivationToken,
// );
//
// router.post(
//     "/forgot",
//     commonMiddleware.isBodyValid(UserValidator.forgotPassword),
//     userMiddleware.isUserExist<IUser>("email"),
//     authController.forgotPassword,
// );
//
// router.put(
//     "/forgot/:token",
//     commonMiddleware.isBodyValid(UserValidator.setForgotPassword),
//     authController.setForgotPassword,
// );
//
// router.post(
//     "/change-password",
//     commonMiddleware.isBodyValid(UserValidator.changePassword),
//     authMiddleware.isAccessTokenValid,
//     authController.changePassword,
// );
export const authRouter = router;
