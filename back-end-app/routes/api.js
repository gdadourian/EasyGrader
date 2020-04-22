var express = require('express');
var router = express.Router();
var studentsData = require('../views/students.json')

/* GET users listing. */
router.get('/students', function(req, res, next) {
  res.json(studentsData);
});

module.exports = router;
