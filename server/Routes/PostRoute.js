import express from 'express';
import PostModal from '../Modal/PostModal.js';
import UserModal from '../Modal/UserModal.js';
import CommentModal from '../Modal/CommentModal.js';
import multer from 'multer';


let image_name;

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        image_name = Date.now() + '-post-' + Math.round(Math.random() * 10) + "-" + file.originalname.trim()
        cb(null, image_name)
    }
});

const upload = multer({ storage: storage });


router.post("/create/:id", upload.single('image'), async (req, res) => {

    const id = req.params['id'];

    try {
        const post = await PostModal({ ...req.body, image: image_name,owner:id }).save();
        const user = await UserModal.findByIdAndUpdate(id, { $push: { post: post?._id } }).populate("post");
        res.send({ user, post });
    } catch (e) {
        res.send({ message: e })
    }
});

router.get("/:limit", async (req, res) => {

    const limit = req.params["limit"];

    try {
        let post = await PostModal.find().sort("-updatedAt").limit(limit).populate("comments").populate("owner","-password");
        post = await UserModal.populate(post, {
            path: "comments.user",
            select: "name image _id",
          });
        res.send(post);
    } catch (e) {
        res.send({ message: e })
    }
});

export default router;