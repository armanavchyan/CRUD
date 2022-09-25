import { Router } from "express";
import { body } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import { signup, signin } from "./controller.js";
import { isEmail, stringErrMessage, nameOnlyLetters, integerErrMessage } from "../../constants/errorMessages.js";


const router = Router();

router.post(
  "/signup",

  body("firstName", stringErrMessage(1, 50)).isLength({ min: 1, max: 50 }),
  body("firstName", nameOnlyLetters).isAlpha(),
  body("lastName", stringErrMessage(1, 50)).isLength({ min: 1, max: 50 }),
  body("lastName", nameOnlyLetters).isAlpha(),
  body("email", isEmail).isEmail(),
  body("age", integerErrMessage(0, 100)).isInt({ min: 0, max: 100 }),
  body("password", stringErrMessage(8, 30)).isString().isLength({ min: 8, max: 30 }),
  expressValidationResult,
  signup,
);


router.post(
  "/signin",
  body("email", isEmail).isEmail(),
  body("password", stringErrMessage(8, 30)).isString().isLength({ min: 8, max: 30 }),
  expressValidationResult,
  signin,
);

export default router;