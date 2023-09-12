const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const AboutUs = require('./models/AboutUs.js');

const { MongoClient } = require("mongodb");

const Reference = require('./models/Reference');

const About = require('./models/AboutUs');
const TimelineVer = require('./models/TimelineVertical');
const TimelineHor = require('./models/TimelineHorizontal');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://SSB-user:g11zWMpLH6MZnuiD@cluster0.gf98q4b.mongodb.net/secrets?retryWrites=true&w=majority');

app.post('/', async (req,res) => {
    console.log('TOimiiks');

});

app.get('/aboutus', async (req,res) => {
    console.log('GET: AboutUs');
    res.json(
      await About.find({})
    );
});

/*
app.get('/blog', async (req,res) => {
    console.log('GET: TimelineVer');
    const {id} = req.params;
    res.json(
      await TimelineVer.findById('64fae3efca6c5bfd75758645')
);
});*/

app.get('/blog', async (req,res) => {
    console.log('GET: TimelineHor');
    const {id} = req.params;
    res.json(
      await TimelineHor.findById('64fb22355481d8d8b64ef83d')
    );
});

app.listen(3001);

/*
    const postDoc =  await Post.create({
        title: "Article2",
        cover: "images/img1",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh purus, porta sit amet ultrices in, aliquet sed libero. Nulla a accumsan turpis. Cras aliquet, nunc sollicitudin bibendum iaculis, arcu ante pellentesque nisl, nec tristique nibh quam eu lorem. Vivamus vel quam a neque molestie pulvinar. Sed nec euismod est. Vestibulum at luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper lacus a tortor iaculis fringilla.",
        nav: {
            element: "Comparison",
            content: "567839049873623er"
        },
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh purus, porta sit amet ultrices in, aliquet sed libero. Nulla a accumsan turpis. Cras aliquet, nunc sollicitudin bibendum iaculis, arcu ante pellentesque nisl, nec tristique nibh quam eu lorem. Vivamus vel quam a neque molestie pulvinar. Sed nec euismod est. Vestibulum at luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper lacus a tortor iaculis fringilla.",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh purus, porta sit amet ultrices in, aliquet sed libero. Nulla a accumsan turpis. Cras aliquet, nunc sollicitudin bibendum iaculis, arcu ante pellentesque nisl, nec tristique nibh quam eu lorem. Vivamus vel quam a neque molestie pulvinar. Sed nec euismod est. Vestibulum at luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper lacus a tortor iaculis fringilla.",
        references: [{
            ref: "64d4f852045c352f994e0d14"
        }]
    })
    res.json(postDoc);
*/

/*
    const mongodb = context.services.get("mongodb-atlas");
    const itemsCollection = mongodb.db("secrets").collection("about_us");

    const person = 
        { 
            name: 'First Last',
            job: 'Student',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh purus, porta sit amet ultrices in, aliquet sed libero. Nulla a accumsan turpis. Cras aliquet, nunc sollicitudin bibendum iaculis, arcu ante pellentesque nisl, nec tristique nibh quam eu lorem. Vivamus vel quam a neque molestie pulvinar. Sed nec euismod est. Vestibulum at luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper lacus a tortor iaculis fringilla.',
            img: "https://cdn.pixabay.com/photo/2015/04/17/03/01/the-locale-726512_1280.jpg",
            linkedin: '',
            email: 'first.last@gmail.com',
    };
    
    itemsCollection.insertOne(person)
        .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
        .catch(err => console.error(`Failed to insert item: ${err}`))
*/