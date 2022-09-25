import { hash, compare } from "bcrypt";

export async function hashPassword(password) {
  try {
    const saltRounds = 10;
    const hashPass = await hash(password, saltRounds);

    return hashPass;
  } catch (err) {
    return err;
  }
}

export async function _compare(password, hash) {
  return await compare(password, hash);
}
