const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser')
const db = require('./config/db');

const Role = require('./routes/role');
const User = require('./routes/user');



const app = express();



db.connect();

app.use(bodyParser.json())

app.use('/role',Role);
app.use('/user', User);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});