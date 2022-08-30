const postService = require('../services/postService');

const userController = {
  create: async (req, res, next) => {
    try {
      const { title, content, userId, categoryIds } = req.newPost;
      const post = await postService.create({ title, content, userId, categoryIds }, categoryIds);

      return res.status(201).json(post); 
    } catch (e) {
      return next(e);
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

  getById: async (req, res) => {
    const { id } = req.params;
    const post = await postService.getById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  },
  
};

module.exports = userController;