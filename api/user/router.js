import { Router } from "express";
import { body, param } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import { isExistsId, isExistsEmail, nameCostomValid } from "./validator.js";
import { getAll, getOne, update, remove } from "./controller.js";
import {
  notFound, changeEmail,
  changePass, stringErrMessage,
  nameOnlyLetters, integerErrMessage
} from '../../constants/errorMessages.js';

const router = Router();

router.get("/", getAll);

router.get(
  "/:email",

  param("email", notFound).custom(isExistsEmail),
  getOne,
);

router.patch(
  "/:id",

  param("id", notFound).custom(isExistsId),


  body("firstName", stringErrMessage(2, 255)).optional()
    .isLength({ min: 2, max: 255 }),
  body("firstName", nameOnlyLetters).optional().custom(nameCostomValid)
    .isAlpha(),

  body("lastName", stringErrMessage(2, 255)).optional()
    .isLength({ min: 2, max: 255 }),
  body("lastName", nameOnlyLetters).custom(nameCostomValid).isAlpha(),

  body("age", integerErrMessage(1, 150)).optional()
    .isInt({ min: 1, max: 150 }),
  body("email", changeEmail).optional()
    .custom(() => Promise.reject()),

  body("password", changePass).optional()
    .custom(() => Promise.reject()),

  expressValidationResult,

  update,
);

router.delete(
  "/:id",
  param("id", notFound).custom(isExistsId),
  expressValidationResult,
  remove,
);

export default router;
