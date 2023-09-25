const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
});

const University = mongoose.models.University || mongoose.model('University', universitySchema);
export default University;