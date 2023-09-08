const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TimelineVer = require('../models/TimelineVertical.js');

function quit () {
    process.exit();
}

mongoose.connect('mongodb+srv://SSB-user:g11zWMpLH6MZnuiD@cluster0.gf98q4b.mongodb.net/secrets?retryWrites=true&w=majority')
.then(() => {
    console.log('connected');
    var table = new TimelineVer({
        title: 'TimelineVer2',
        dots: [{
            main_text: 'Main Text2',
            secondary_text: 'Secondary text2',
        }, {
            main_text: 'Main Text',
            secondary_text: 'Secondary text',
        }, {
            main_text: 'Main2',
            secondary_text: 'Secondary2',
        }, {
            main_text: 'Main',
            secondary_text: 'Secondary',
        }]
    });

    table.save().then(() => quit() );
});