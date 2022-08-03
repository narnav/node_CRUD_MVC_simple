const mongoose = require('mongoose');
// var AutoIncrement = require('mongoose-sequence')(mongoose);
const StudentSchema = mongoose.Schema({
    // _id: {type: String, required: true},
    name: String,
    email: String
});

module.exports = mongoose.model('Student', StudentSchema);