require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const userService = {
  create: async (userData) => {
    const user = await User.create(userData);

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
  };

    const token = jwt
      .sign({ data: { email: userData.email, id: user.id } },
        JWT_SECRET, jwtConfig);
        
    return { token };
  },

  findAll: async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },

  findOneUser: async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    if (!user) return { message: 'User does not exist', code: 404 };

    return user;
  },

  delete: (id) => User.destroy({ where: { id } }).then(() => true),
};

module.exports = userService;