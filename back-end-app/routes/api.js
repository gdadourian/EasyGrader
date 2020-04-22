var express = require('express');
var router = express.Router();
var studentsData = require('../views/students.json')
var gradesData = require('../views/grades.json')

/* GET students listing. */
router.get('/students', function(req, res, next) {
  res.json(studentsData);
});

/* GET grades listing. */
router.get('/grades', function(req, res, next) {
  res.json(gradesData);
});

module.exports = router;
