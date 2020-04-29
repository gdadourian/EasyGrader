var express = require('express');
var router = express.Router();

var Student = require('../models/student')
var Grade = require('../models/grade')

/* GET students listing. */
router.get('/students', function(req, res, next) {
  Student.find().exec(function(err, list_students) {
    if (err) { return next(err) }
    res.json(list_students);
  })
});

router.post('/students', function(req, res, next) {
  const student = new Student({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  })
  student.save(function(err) {
    if (err) { return next(err) }
    res.json(student)
  })
})

/* GET grades listing. */
router.get('/grades', function(req, res, next) {
  Grade.find().exec(function(err, list_grades) {
    if (err) { return next(err) }
    res.json(list_grades)
  })
});

module.exports = router;
