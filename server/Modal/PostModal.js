import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
    ,
    image: {
        type: String
    },
    description: {
        type: String
    },
    likes: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],
    comments: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Comment" }
    ]

}, {
    timestamps: true
})



const Post = mongoose.models.PostSchema || mongoose.model('Post', PostSchema);
export default Post;

