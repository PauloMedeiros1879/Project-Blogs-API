require('dotenv').config();
const { BlogPost, PostCategory, User, Category } = require('../database/models');

const postService = {
  create: async (newPost, categories) => {
    const { dataValues:
      { id, title, content, published, updated } } = await BlogPost.create(newPost);
    await Promise.all(categories.map((e) => PostCategory.create({ postId: id, categoryId: e })));

    return { id, title, content, userId: newPost.userId, published, updated };
  },

  findAll: async () => {
    const post = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return post;
  },
};

module.exports = postService;