import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        lowercase: true,
        trim: true,
        min: 4,
        required: true,
    }, 
    commnetedBy: {
        type: String,
        lowercase: true,
        trim: true
    },
    commentedOn: {
        type: mongoose.Types.ObjectId,
        ref: "post",
        required: true,
    }
}, {timestamps: true})


export default mongoose.models.comment || mongoose.model('comment', commentSchema);