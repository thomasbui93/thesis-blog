import mongoose, { Schema, model } from 'mongoose';

const Image = new Schema({
    createAt: {
        type: Date,
        default: new Date()
    },
    caption: {
        type: String,
        required: true,
        default: 'Untitled'
    },
    url: {
        type: String,
        required: true
    }
})
export default mongoose.model('Image', Image);