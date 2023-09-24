const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const UniversitySchema = new Schema({
    name: String,
    email: String,
    password: String,
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});


const University = mongooose.models?.University || mongooose.model('University', UniversitySchema);

module.exports = { University };