const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const AboutUsSchema = new Schema({
    name: {type: String, require: true},
    job: {type: String, require: true},
    desc: {type: String, require: true},
    img: {type: Image, require: true},
    linkedin: {type: String, require: true},
    email: {type: String, require: true},    
});

const AboutUsModel =  model('AboutUs', AboutUsSchema);

module.exports = AboutUsModel;