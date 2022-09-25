import { getAllService,
  getOneByEmailService, updateService,
  removeService
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await getOneByEmailService(email,password);
    res.send(user); 
  } catch (err) {
    next(err);
  }
}
export async function getAll(req, res, next) {
  try {
    const users = await getAllService();
    res.send(users);
  } catch (err) {
    next(err);
  }
}


export async function update(req, res, next) {
  try {
    const { params: { id }, body } = req;
    const user = await updateService(id, body);
    res.send(user);
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const user = await removeService(id);
    res.send('user deleted!');
  } catch (err) {
    next(err);
  }
}
