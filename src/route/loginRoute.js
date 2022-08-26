const { Router } = require('express');
const loginController = require('../controllers/loginController');
const loginValidate = require('../middlewares/loginValidate');

const router = Router();

router.post('/', loginValidate, loginController.userLogin);

module.exports = router;