var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Betty's page" });
});

//add Pokemon
router.get('/add', (req, res) => {
  res.send('Add!')
});

//update pokemon
router.get('/update', (req, res) => {
  res.send('Updated!')
});

//delete Pokemon
router.get('/delete', (req, res) => {
  res.send('Deleted!')
});




module.exports = router;
