const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TimelineHor = require('../models/TimelineHorizontal.js');

function quit () {
    process.exit();
}

mongoose.connect('mongodb+srv://SSB-user:g11zWMpLH6MZnuiD@cluster0.gf98q4b.mongodb.net/secrets?retryWrites=true&w=majority')
.then(() => {
    console.log('connected');
    var table = new TimelineHor({
        title: 'TimelineHor2',
        dots: [{
            text: 'Dot1',
            active: true,
        }, {
            text: 'Dot2',
            active: true,
        }, {
            text: 'Dot3',
            active: true,
        }, {
            text: 'Dot4',
            active: false,
        }]
    });

    table.save().then(() => quit() );
});