const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const tokenAuthentication = require('../middlewares/Authentication');
const categoriesValidate = require('../middlewares/categoriesValidate');

const categoryRoute = Router();

categoryRoute.use(tokenAuthentication);

categoryRoute.post('/', categoriesValidate, categoriesController.create);
categoryRoute.get('/', categoriesController.findAll);

module.exports = categoryRoute;