
import Post from "../../models/post.js"

export async function getAllService() {
    const posts = await Post.findAll();
    for (let i in posts) {
        if (posts[i].imgName) { 
            posts[i].imgName = 'http://127.0.0.1:3001/uploads/' + posts[i].imgName; 
        }
    }
    return posts;
}
export async function getOneService(id) {
    const post = await Post.findOne({ where: { id: id } });
    return post;
}
export async function getUserPostsService(user_id) {
    const post = await Post.findAll({
        where: { user_id: user_id },
    })
    console.log(post);
    return post;
}

export async function createService(body) {
    const post = await Post.create(body)
    return post;
}

export async function updateService(id, body) {
    const post = await Post.update(body, {
        where: {
            id: id
        }
    });
    return getOneService(id);
}
export async function removeService(id) {
    const post = await Post.destroy({
        where: {
            id: id
        }
    })
    return 'post is deleted'
}