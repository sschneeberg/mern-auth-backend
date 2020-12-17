require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = express.Router();

//models
const User = require('../models').User;

//GET api/users/test (public)
router.get('/test', (req, res) => {
    res.json({ msg: 'User endpoint connection' });
});

module.exports = router;
