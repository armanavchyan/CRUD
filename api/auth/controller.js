import { signinService } from "./service.js";
import { createService, getOneByEmailService, updateService } from "../user/service.js";
import { hashPassword, _compare } from '../../utils/helper.js';



export async function signup(req, res, next) {
  try {
    let user = await createService(req.body);
    return res.send(user);
  } catch (err) {
    return next(err);
  }
}

export async function signin(req, res, next) {

  try {
    const { password, email } = req.body;
    let user = await getOneByEmailService(email, password);
    if (!user) {
      throw new Error("user not found");
    }
    const jwt = await signinService(user, password);
    return res.send({ jwt: jwt });
  } catch (err) {
    if (err === 401) {
      return res.status(401)
        .send(JSON.stringify({ message: "user credentials is wrong" }));
    }
    return next(err);
  }
}
