const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Reference = require('./models/Reference');
const Post = require('./models/Post_item');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://SSB-user:g11zWMpLH6MZnuiD@cluster0.gf98q4b.mongodb.net/?retryWrites=true&w=majority');

app.post('/', async (req,res) => {
    const postDoc =  await Post.create({
        title: "Article4",
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
});

app.get('/blog', async (req,res) => {
    res.json(
      await Post.find()
    );
});

app.get('/blog/:id', async (req, res) => {
    const {id} = req.params;
    res.json(
        await Post.findById(id)
    );
});

/*
app.post('/', async (req,res) => {
    const {testname, content} = req.body;
    const referenceDoc =  await Reference.create({
        author: "author",
        title: "content"
    })
    res.json(referenceDoc);
});



app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id);
    res.json(postDoc);
});
*/

app.listen(3001);

