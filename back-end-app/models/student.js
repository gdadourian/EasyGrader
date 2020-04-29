var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
});

module.exports = mongoose.model('Student', StudentSchema);