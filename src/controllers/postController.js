const postService = require('../services/postService');

const userController = {
  create: async (req, res, next) => {
    try {
      const { title, content, userId, categoryIds } = req.newPost;
      const post = await postService.create({ title, content, userId }, categoryIds);

      return res.status(201).json(post); 
    } catch (err) {
      return next(err);
    }
  },

  findAll: async (_req, res, next) => {
    try {
      const posts = await postService.findAll();
      
      return res.status(200).json(posts);
    } catch (e) {
      return next(e);
    }
  },
  
};

module.exports = userController;