const router = require('express').Router();
const user = require('./controllers/ModelUsersController');

router.get('/user', user.usercontroller.getUser);
router.get('/user/:id', user.usercontroller.getIdUser);
router.get('/userNombre/:nombre', user.usercontroller.getIdUser);
router.get('/userEdad/:edad', user.usercontroller.getIdUser);
router.post('/user/', user.usercontroller.postUser);
router.put('/user/:id', user.usercontroller.putUser);
router.delete('/user/:id', user.usercontroller.deleteUser)

module.exports = router;