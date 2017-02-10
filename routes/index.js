let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');
//let game = require('../config/game');

router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home'
   });
});

router.get('/about', (req, res, next) => {
  res.render('content/about', {
    title: 'About'
   });
});





/* GET products page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', {
    title: 'Projects'
   });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', {
    title: 'Services'
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
   });
});

module.exports = router;