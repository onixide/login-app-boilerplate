const express = require('express');
const router = express.Router();
const { User, validID } = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			//get all users
			let users = await User.find().sort('-created');
			res.json(users).status(200);
		} catch (ex) {
			next(ex);
		}
	}
);

router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			//get user by id
			const validatedID = validID(req.params.id);

			if (validatedID) {
				let user = await User.findById(req.params.id);
				if (user) {
					res.json(user).status(200);
				} else {
					res.status(404).json({
						success: false,
						message: `Użytkownik ${req.params.id} nie istnieje`
					});
				}
			} else {
				res.status(400).json({
					success: false,
					message: `Id użytkownika - ${req.params.id} - jest błędny.`
				});
			}
		} catch (ex) {
			next(ex);
		}
	}
);

router.post('/', async (req, res, next) => {
	try {
		let user = await User.findOne({ login: req.body.login });
		//user exist
		if (user)
			return res.status(409).json({
				success: false,
				message: `Użytkownik - ${user.login} - już istnieje`
			});
		// user dont exist
		user = new User(({ login, password } = req.body));
		// password hash
		let salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
		//save to db and res
		user = await user.save();
		res.json(user.login).status(201);
	} catch (ex) {
		next(ex);
	}
});

router.put(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			let reqCopy = Object.assign({}, req.body);

			if (reqCopy.password === '') {
				delete reqCopy.password;
			} else {
				let salt = await bcrypt.genSalt(10);
				let reqCopyPassword = await bcrypt.hash(reqCopy.password, salt);
				reqCopy.password = reqCopyPassword;
			}
			let updatedUser = await User.findByIdAndUpdate(
				reqCopy._id,
				reqCopy,
				{
					new: true
				}
			);
			res.json(updatedUser);
		} catch (ex) {
			next(ex);
		}
	}
);

router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			if (req.user._id.toString() === req.params.id.toString()) {
				return res.status(409).json({
					success: false,
					message: `Użytkownik - ${
						user.login
					} - nie może zostać usunięty przez samego siebie ;)`
				});
			} else {
				let deletedUser = await User.findByIdAndDelete(req.params.id);
				res.json(deletedUser);
			}
		} catch (ex) {
			next(ex);
		}
	}
);

module.exports = router;
