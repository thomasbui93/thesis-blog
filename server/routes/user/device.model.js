import mongoose, { Schema, model } from 'mongoose';

let Device = new Schema({
    fingerprint: {
        type: String
    },
    os: {
        type: Object
    },
    browser: {
        type: Object
    },
    lastLogin: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('Device', Device);
