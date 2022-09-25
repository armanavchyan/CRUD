import express from "express";
import createFolder from "./utils/createFolder.js";
import authRouter from "./api/auth/router.js";
import userRouter from "./api/user/router.js";
import postRouter from "./api/post/router.js";
import createDb from './utils/create-db.js'

const app = express();

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({
        message: err.message,
        code: err.status || 500,
        stack: err.stack,
        err: err
    });
});

createFolder;
createDb;

export default app;