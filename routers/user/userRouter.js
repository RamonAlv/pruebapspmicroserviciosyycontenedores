const router = require('express').Router();

const { create, getAll, getId, update, destroy } = require('../../controller/userController');

router.post('/create', create);
router.get('/getAllUsers', getAll);
router.get('/getUser/:id', getId);
router.put('/updateUser/:id', update);
router.delete('/delete/:id', destroy);


module.exports = router;