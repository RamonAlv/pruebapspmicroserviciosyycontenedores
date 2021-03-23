const router = require('express').Router();

const { get } = require('../../controller/helloWorldController');

router.get('/v1', get);


module.exports = router;