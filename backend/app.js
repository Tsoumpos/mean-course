import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import Post from './models/post.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post("/api/posts", async (req, res, next) => {
    const post = await Post.create({
        id: uuidv4(),  
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    res.status(201).json({
        message:'Post added succesfully',
        post: post
    });
});

app.get('/api/posts', async (req, res, next) => {

    try{
        const posts = await Post.findAll();

        console.log('POSTS:', posts);

        res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });
    } catch (error){
        next(error);
    }    
});

app.delete('/api/posts/:id', async (req, res, next) => {

    try{
        const deleted = await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        if (deleted === 0) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }        

        res.status(200).json({
        message: 'Posts deleted succesfully!',        
    });
    } catch (error){
        next(error);
    }    
});

sequelize.sync({ alter: true })
    .then(() => console.log('Database synced'))
    .catch(err => console.log('Sync error:', err));

export default app;