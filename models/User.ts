import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, {timestamps: true});


export default mongoose.models.user || mongoose.model('user', userSchema);