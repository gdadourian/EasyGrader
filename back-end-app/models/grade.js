var mongoose = require('mongoose');

var GradeSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.ObjectId, ref: 'Student', required: true },
    assignment: String,
    score_received: Number,
    score_possible: Number,
});

module.exports = mongoose.model('Grade', GradeSchema);