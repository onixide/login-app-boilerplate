const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		minlength: 1,
		maxlength: 255,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 1024,
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('User', UserSchema);
module.exports.User = User;

module.exports.validID = function(id) {
	console.log(`id jest ${mongoose.Types.ObjectId.isValid(id)}`);
	return mongoose.Types.ObjectId.isValid(id);
};
