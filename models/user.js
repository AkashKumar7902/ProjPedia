const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    upvoted: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

const User = mongoose.model('User', UserSchema);