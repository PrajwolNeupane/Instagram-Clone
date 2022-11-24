import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    image: {
        type: String
    },
    following:
        [
            { type: mongoose.Schema.Types.ObjectId, ref: "User" }
        ]
    ,
    followers: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],
    post: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Post"
        }
    ]

})



const User = mongoose.models.UserSchema || mongoose.model('User', UserSchema);
export default User;

