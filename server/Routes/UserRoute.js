import express from 'express';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import UserModal from '../Modal/UserModal.js';
import 'dotenv/config';


const router = express.Router();

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

        user = new UserModal({...req.body,image:"https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"});
        user = await user.save();

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_TOKEN);

        res.status(200).json({ token });

    } catch (e) {
        res.status(500).json({ message: error.message });
    }
});



export default router;