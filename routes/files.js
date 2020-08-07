const express = require('express');

const router = express.Router();

const filesCrtl = require('../controllers/files');

router.post('/', filesCrtl.creatFile);
router.get('/', filesCrtl.getFiles);
router.get('/:id', filesCrtl.getOneFile);

module.exports = router;
