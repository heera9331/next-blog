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
    tags: {
        type: String
    },
    author:{
        type: String,
        required: true, 
    },
    views: {
        type: Number, default: 0
    },
    likes: {
        type: Number, default: 0
    }, 
}, {timestamps: true});


export default mongoose.models.post || mongoose.model('post',postSchema);