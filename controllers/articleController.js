const Article = require('../models/article');

const article_index = (req, res) => {
  Article.find()
    .sort({ createdAt: -1 })
    .then(result => res.render('index', { title: 'Home', articles: result }))
    .catch(err => console.log(err));
};

const article_post = (req, res) => {
  const article = new Article(req.body);
  article
    .save()
    .then(result => res.redirect('/'))
    .catch(err => console.log(err));
};

const article_details = (req, res) => {
  Article.findById(req.params.id)
    .then(result => res.render('articles/details', { title: result.title, article: result }))
    .catch(err => console.log(err));
};

const article_delete = (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(result => res.json({ redirect: '/' }))
    .catch(err => console.log(err));
};

module.exports = {
  article_index,
  article_post,
  article_details,
  article_delete,
};
