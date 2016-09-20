const mongoose  = require('mongoose');
const { Schema, model } = mongoose;

const  uniqueValidator =  require('mongoose-unique-validator');

let Category = new Schema({
    createAt: {
        type: Date,
        default: new Date()
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
        unique: true
    }
});
Category.plugin(uniqueValidator);


module.exports = mongoose.model('Category', Category);