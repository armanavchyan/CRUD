import {
    getOneService, getUserPostsService,
    getAllService, createService,
    updateService, removeService
} from "./service.js";


export async function getOne(req, res, next) {
    try {
        const { params: { id } } = req;
        const post = await getOneService(id);
        res.send(post);
    } catch (err) {
        next(err);
    }
}

export async function getOneByUserId(req, res, next) {
    try {
        const { user_id } = req.params;
        const post = await getUserPostsService(user_id);
        return await res.send(post);
    } catch (err) {
        next(err);
    }
}

export async function getAll(req, res, next) {
    try {
        const posts = await getAllService();
        res.send(posts);
    } catch (err) {
        next(err);
    }
}

export async function create(req, res, next) {
    try {
        req.body.imgName = req.file.filename;
        let post = await createService(req.body);
        if (post.imgName) {
            post.imgName = 'http://127.0.0.1:3001/uploads/' + post.imgName;
        }
        return res.send(post);

    } catch (err) {
        next(err);
    }
}

export async function update(req, res, next) {
    try {
        const { params: { id }, body } = req;
        const post = await updateService(id, body);
        res.send(JSON.stringify(post));
    } catch (err) {
        next(err);
    }
}

export async function remove(req, res, next) {
    try {
        const { params: { id } } = req;
        const post = await removeService(id);
        res.send('post is deleted');
    } catch (err) {
        next(err);
    }
}
