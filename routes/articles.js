const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', (req, res) => {
  res.render('index', { title: 'Home ' });
});

router.get('/create', (req, res) => {
  res.render('articles/create', { title: 'Create' });
});

router.post('/', articleController.article_post);
router.get('/:id', articleController.article_details);
router.delete('/:id', articleController.article_delete);

module.exports = router;
