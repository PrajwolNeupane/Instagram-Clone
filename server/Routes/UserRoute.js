import express from 'express';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import UserModal from '../Modal/UserModal.js';
import PostModal from '../Modal/PostModal.js';
import multer from 'multer';
import 'dotenv/config';


let image_name;

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        image_name = Date.now() + '-dp-' + Math.round(Math.random() * 10) + "-" + file.originalname.trim()
        cb(null, image_name)
    }
});

const upload = multer({ storage: storage });

router.post('/me', async (req, res) => {

    try {
        const token = req.body.token;
        if (!token) return res.status(401).send('Acess denied. No token provided.');
        const decode = jwt.verify(token, process.env.JWT_TOKEN);

        if (!decode) return res.status(401).send('Acess denied. No token provided.');
        const user = await UserModal.findById(decode.id).select('-password').populate("post");
        res.send(user);

    } catch (e) {
        res.send({ message: e })
    }

});

router.post('/id', async (req, res) => {

    try {
        const id = req.body.id;
        const user = await UserModal.findById(id).select('-password').populate("post");
        res.send(user);

    } catch (e) {
        res.send({ message: e })
    }

});

router.post('/update/picture', upload.single('image'), async (req, res) => {

    try {
        const id = req.body.id;
        const user = await UserModal.findByIdAndUpdate(id, { image: image_name }).populate("post");
        res.send(user);

    } catch (e) {
        res.send({ message: e })
    }

});

router.post('/suggestion', async (req, res) => {
    try {
        let users = [];
        const c_user = await UserModal.find({ _id: req.body.id }).select('following');
        c_user.following?.forEach(async (curr) => {
            if (users.length < 8) {
                let user = await UserModal.find(({ _id: { $ne: curr } })).select("-password");
                users.push(user);
            }
            res.send(users);
        });
        // users = await UserModal.find({ _id: { $ne: req.body.id } }).select("-password").limit(6)

    } catch (e) {
        console.log(e);
    }
})

router.post('/search', async (req, res) => {

    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    try {
        const name = req.body.name;
        const user = await UserModal.find(keyword).find({ _id: { $ne: req.body.id } }).select("-password").limit(10);
        res.send(user);

    } catch (e) {
        res.send({ message: e })
    }

});

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {

        let user = await UserModal.findOne({ email });

        if (user) {
            const validity = await bcrypt.compare(password, user.password);
            if (!validity) {
                res.status(400).json({ message: "Password wrong" });
            } else {
                const token = jwt.sign(
                    { id: user._id },
                    process.env.JWT_TOKEN
                );
                res.status(200).json({ token });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }

    } catch (e) {
        res.status(500).json(e);
    }

});


router.post('/createuser', async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;

    try {
        let user = await UserModal.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        user = new UserModal({ ...req.body, image: "avatar-person.svg" });
        user = await user.save();

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_TOKEN);

        res.status(200).json({ token });

    } catch (e) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/follow', async (req, res) => {
    try {

        let user = await UserModal.findByIdAndUpdate({_id:req.body.currrentid}, { $push: { following: req.body.id } }).select('-password').populate("post").populate("following");
        let nextUser = await UserModal.findByIdAndUpdate({_id:req.body.id},{$push :{following:req.body.currrentid}})
        res.send(user);
    } catch (e) {
        console.log(e);
    }
})



export default router;