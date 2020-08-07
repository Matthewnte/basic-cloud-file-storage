const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/auth/user', userCtrl.creatUser);
router.get('/users', userCtrl.getUsers);
router.get('/user/:id', userCtrl.getOneUser);

module.exports = router;
