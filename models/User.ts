import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, {timestamps: true});


export default mongoose.models.User || mongoose.model('user', userSchema);