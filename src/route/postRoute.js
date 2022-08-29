const { Router } = require('express');
const postController = require('../controllers/postController');
const tokenAuthentication = require('../middlewares/Authentication');
const validPost = require('../middlewares/postValidate');

const postRoute = Router();

postRoute.use(tokenAuthentication);

postRoute.post('/', validPost, postController.create);
postRoute.get('/', postController.findAll);

module.exports = postRoute;