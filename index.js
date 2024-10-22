const express = require('express');
require('dotenv').config();
const connect = require('./config/db');

const app = express();




connect()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});