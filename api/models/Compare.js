const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const CompareShema = new Schema({
    variant: String,
    entries: [{
        title: String,
        content: String
    }]
});

const CompareModel =  model('Compare', CompareSchema);

module.exports = CompareModel;