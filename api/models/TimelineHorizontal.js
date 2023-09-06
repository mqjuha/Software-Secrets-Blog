const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TimelineHorSchema = new Schema({
    link: {type: String, require: false},
    text: {type: String, require: true},
    active: {type: Boolean, require: true},
});

const TimelineHorModel =  model('TimelineHor', TimelineHorSchema);

module.exports = TimelineHorModel;