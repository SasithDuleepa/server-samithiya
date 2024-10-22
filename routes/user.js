
const express = require('express');
const AddUser = require('../controllers/user/addUser');

const router = express.Router();

router.post('/add',AddUser);


module.exports = router;