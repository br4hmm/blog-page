const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const articleRouter = require('./routes/articles');
const articleController = require('./controllers/articleController');
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.DBURI)
  .then(result => app.listen(5000))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', articleController.article_index);
app.use('/articles', articleRouter);
app.use((req, res) => res.status(404).render('404', { title: 'Error' }));
