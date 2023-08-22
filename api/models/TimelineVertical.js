const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TimelineVerSchema = new Schema({
    link: {type: String, require: false},
    main_text: {type: String, require: true},
    secondary_text: {type: String, require: false},
});

const TimelineVerModel =  model('TimelineVer', TimelineVerSchema);

module.exports = TimelineVerModel;