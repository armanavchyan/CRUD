import { getOneService, getUserPostsService} from "./service.js";

export  async function isExists(val) {
  const post = await getOneService(val);
  if (!post) {
    return Promise.reject();
  }
  return true;
}
export  async function isExistsUserId(val) {
  const post = await getUserPostsService(val);
  if (post) {
    return Promise.reject();
  }

  return true;
}
export   async function ifIsExistsEmail(email) {
  const post = await getOneByEmailService(email);
  if (!post) {
    return Promise.reject();
  }

  return true;
}
