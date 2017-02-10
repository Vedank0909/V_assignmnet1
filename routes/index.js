/* 
Filename:index.js
Authorname:Vedank Patel
websitename:https://assignmen.herokuapp.com/
File Description:file that routes content pages 
*/
let express = require('express');

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