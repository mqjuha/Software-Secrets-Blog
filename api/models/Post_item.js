const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new Schema({
    title: String,
    cover: String,
    abstract: String,
    nav: {
        element: String,
        content: String
    },
    content: String,
    summary: String,
    references: [{
        ref: String
    }]
});

const PostModel =  model('Post', PostSchema);

module.exports = PostModel;