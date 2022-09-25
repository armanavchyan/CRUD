import { Router } from "express";
import { body, param } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import { isExists } from "../post/validator.js";
import { isExistsId } from "../user/validator.js";
import { getAll, getOne, getOneByUserId, create, update, remove } from "./controller.js";
import { notFound, changeUserId ,changeimgName} from '../../constants/errorMessages.js';
import { authentication } from "../../utils/jwt-helper.js";
import upload from '../../utils/multer.js';


const router = Router();

router.get("/", getAll);

router.get(
  "/:id",
  param("id", notFound).custom(isExists),
  getOne,
);

router.get(
  "/userId/:user_id",
  param("user_id", notFound).custom(isExistsId),
  getOneByUserId,
);

router.post('/',
  upload.single('imgName'),
  body("user_id", notFound).custom(isExistsId),
  body("title"),
  body("imgName"),
  authentication,
  create,
)

router.patch(
  "/:id",
  param("id", notFound).custom(isExists),
  body("title"),
  body("descript"),
  body("imgName",changeimgName).optional().custom(() => Promise.reject()),
  body("user_id",changeUserId).optional().custom(() => Promise.reject()),
  expressValidationResult,
  update,
);

router.delete(
  "/:id",
  param("id", notFound).custom(isExists),
  expressValidationResult,
  remove,
);

export default router;
