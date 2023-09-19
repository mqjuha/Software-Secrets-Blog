const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Reference = require('../models/Reference.js');

function quit () {
    process.exit();
}

mongoose.connect('mongodb+srv://SSB-user:g11zWMpLH6MZnuiD@cluster0.gf98q4b.mongodb.net/secrets?retryWrites=true&w=majority')
.then(() => {
    console.log('connected');
    var reference = new Reference({
        authors: 'Authors',
        year: new Date(2023, 10, 10),
        title: 'Title',
        source: [{
            journal_name: 'Journal name',
            volumer: 3,
            number: 3,
        }],
        pages: 'Pages',
        series: 'Series',
    });

    reference.save().then(() => quit() );
});