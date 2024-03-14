import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    slug: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    desc: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String
    },
    author:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    },
    views: {
        type: Number, default: 0
    },
    likes: {
        type: Number, default: 0
    }, 
}, {timestamps: true});


export default mongoose.models.post || mongoose.model('post',postSchema);