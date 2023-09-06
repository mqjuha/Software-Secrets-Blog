const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Reference = require('./models/Reference');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://SSB-user:g11zWMpLH6MZnuiD@cluster0.gf98q4b.mongodb.net/?retryWrites=true&w=majority');

app.post('/', async (req,res) => {
    const {testname, content} = req.body;
    const referenceDoc =  await Reference.create({
        author: testname,
        title: content
    })
    res.json(referenceDoc);
});

app.listen(3000);

