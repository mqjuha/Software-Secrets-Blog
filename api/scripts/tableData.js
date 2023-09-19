const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Table = require('../models/Table.js');

function quit () {
    process.exit();
}

mongoose.connect('mongodb+srv://SSB-user:g11zWMpLH6MZnuiD@cluster0.gf98q4b.mongodb.net/secrets?retryWrites=true&w=majority')
.then(() => {
    console.log('connected');
    var table = new Table({
        title: "Table2",
        table: {
            header_row: ["Header", "Header1", "Header2", "Header3", "Header4"],
            content: [{
                navigation: 'link',
                items: ["header1", "row1", "row1"],
            },
            {
                items: ["header2", "row2", "row2"],
            },
            {
                items: ["header3", "row3", "row3"],
            },
            {
                items: ["header4", "row4", "row4"],
            },
            {
                items: ["header5", "row5", "row5"],
            }
            ] 
        }
    });

    table.save().then(() => quit() );
});