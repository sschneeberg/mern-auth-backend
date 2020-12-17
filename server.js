//imports and set up
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to backend' });
});

app.listen(port, console.log(`listening on port ${port}`));
