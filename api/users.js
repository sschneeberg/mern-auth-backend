require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = express.Router();

//models
const db = require('../models');

//GET api/users/test (Public)
router.get('/test', (req, res) => {
    res.status(200).json({ msg: 'User endpoint connection' });
});

//POST api/users/register (Public)
router.post('/register', (req, res) => {
    db.User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            //already have this user, they cannot register again
            res.status(400).json({ msg: 'Email already exsists' });
        } else {
            const newUser = new db.User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            //salt and hash
            bcrypt.genSalt(10, (error1, salt) => {
                if (error1) throw Error;
                bcrypt.hash(newUser.password, salt, (error2, hash) => {
                    if (error2) throw Error;
                    //change password to hash before saving new user
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((createdUser) =>
                            res.status(201).json({ user: createdUser })
                        )
                        .catch((err) => console.log(err));
                });
            });
        }
    });
});

module.exports = router;
