const {Router} = require('express');
const router = Router();

const {getTime, postTime} = require('./fileTimeZone'); 

router.get('/', getTime)

router.post('/', postTime)

module.exports = router