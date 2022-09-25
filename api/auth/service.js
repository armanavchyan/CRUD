import { sign } from "../../utils/jwt-helper.js";
import { _compare } from "../../utils/helper.js";


export async function signinService(user, password) {
  if (!user) {
    return Promise.reject(401);
  }

  const isEqual = await _compare(password, user.password);
  if (!isEqual) {
    return Promise.reject(401);
  }

  const token = sign({ _id: user._id });

  return token;
}
 