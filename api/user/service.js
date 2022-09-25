import User from "../../models/user.js";
import { hashPassword,_compare } from '../../utils/helper.js';



export async function getOneService(id) {
  const user = await User.findOne({ where: { id: id } });
  return user;
}


export async function getOneByEmailService(email, password) {
  const user = await User.findOne({
    where: {
      email: email
    }
  });
  if (user) {
    const hash = await hashPassword(password);
    const passComp = await _compare(password, hash);
    if (passComp) {
      return user;
    }
  }
  return false;

}

export async function getAllService() {
  const users = await User.findAll();
  return users;
}

export async function createService(body) {

  const { password } = body;
  const hash = await hashPassword(password);
  body.password = hash;
  const user = await User.create(body);
  return user;
}

export async function updateService(email, body) {
  const user = await User.update(body, {
    where: {
      email: email
    }
  });
  return getOneByEmailService(email);
}

export async function removeService() {
  const user = await User.destroy({
    where: {
      email: email
    }
  });
  return (' user deleted');
}