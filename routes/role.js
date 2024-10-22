
const express = require('express');
const AddRole = require('../controllers/role/addRole');

const router = express.Router();

router.post('/add',AddRole);


module.exports = router;