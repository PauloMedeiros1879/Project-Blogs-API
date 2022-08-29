const userService = require('../services/userService');

const userController = {
  create: async (req, res, next) => {
    try {
      const token = await userService.create(req.body);
      return res.status(201).json(token);
    } catch (e) {
      return next(e);
    }
  },

  findAll: async (_req, res, next) => {
    try {
      const users = await userService.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return next(e);
    }
  },

  findOnUser: async (req, res, next) => {
    try {
      const user = await userService.findOneUser(req.params.id);
      if (user.code) return next(user);
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  },
};

module.exports = userController;