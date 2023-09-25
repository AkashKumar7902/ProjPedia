const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: String, 
    institution: String,
    stars: Number,
    upvotes: Number,
    gender: String,
    tags: [
        {
            type: String,
            lowercase: true,
            trim: true
        }
    ],
    link: String,
    plagScore: Number,
    subject: String,
},
{ timestamps: { createdAt: 'created_at' } });

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

module.exports = { Project };