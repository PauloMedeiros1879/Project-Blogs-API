const categoriesService = require('../services/categoriesService');

const categoriesController = {
  create: async (req, res, next) => {
    try {
      const category = await categoriesService.create(req.body.name);
      return res.status(201).json(category);
    } catch (e) {
      return next(e);
    }
  },

  findAll: async (_req, res, next) => {
    try {
      const categories = await categoriesService.findAll();
      return res.status(200).json(categories);
    } catch (e) {
      return next(e);
    }
  },
};

module.exports = categoriesController;