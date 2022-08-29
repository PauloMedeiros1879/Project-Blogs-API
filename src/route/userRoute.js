const express = require('express');
const userController = require('../controllers/userController');
const tokenAuthentication = require('../middlewares/Authentication');
const userPlace = require('../middlewares/userValidate');

const userRoute = express.Router();

userRoute.post('/', userPlace, userController.create);
userRoute.get('/:id', tokenAuthentication, userController.findOnUser);
userRoute.get('/', tokenAuthentication, userController.findAll);

module.exports = userRoute;