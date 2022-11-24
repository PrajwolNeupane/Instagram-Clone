import mongoose from "mongoose";


const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    content: {
        type: String
    }

})



const Comment = mongoose.models.CommentSchema || mongoose.model('Comment', CommentSchema);
export default Comment;

