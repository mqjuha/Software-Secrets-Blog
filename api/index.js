const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Reference = require('./models/Reference');
const Post = require('./models/Post_item');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://SSB-user:g11zWMpLH6MZnuiD@cluster0.gf98q4b.mongodb.net/secrets?retryWrites=true&w=majority');


app.post('/', async (req,res) => {
    const postDoc =  await Post.create({
        category: "ux",
        title: "Experience-driven Design",
        date: "2023-06-10",
        cover: "images/img1",
        keywords: ["experience design", "experience goals"],
        abstract: "ABSTRACT",
        nav: {
            nav_type: "Comparison",
            content: "567839049873623er"
        },
        content: ["1", "2", "3", "4", "5"],
        summary: "SUMMARY",
        references: ["64d4f852045c352f994e0d14"]
    })
    res.json(postDoc);
});
app.get('/blog/technology', async (req, res) => {
    console.log('GET TECH POSTS')
    res.json(
        await Post.find({category: "tech"}).exec()
    );
});

app.get('/blog/business', async (req, res) => {
    console.log('GET BUSINESS POSTS')
    res.json(
        await Post.find({category: "business"}).exec()
    );
});

app.get('/blog/ux', async (req, res) => {
    console.log('GET UX POSTS')
    res.json(
        await Post.find({category: "ux"}).exec()
    );
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

