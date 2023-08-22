const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const ReferenceSchema = new Schema({
    author: {type: String, require: true},
    title: {type: String, require: true},

});

const ReferenceModel =  model('Reference', ReferenceSchema);

module.exports = ReferenceModel;