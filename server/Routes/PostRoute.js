import express from 'express';
import PostModal from '../Modal/PostModal.js';
import UserModal from '../Modal/UserModal.js';
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

    const { id } = req.params();

    try {
        const post = await PostModal({ ...req.body, image: image_name });
        const user = await UserModal.findByIdAndUpdate(id, { $push: { post: post?._id } });
        res.send(user);
    } catch (e) {
        res.send({ message: e })
    }
});

export default router;