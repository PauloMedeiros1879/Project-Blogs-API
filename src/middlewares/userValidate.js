const { User } = require('../database/models');

const validations = async (data) => {
  if (data.displayName.length < 8) {
    return { error:
      { code: 400, message: '"displayName" length must be at least 8 characters long' },
    };
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = data.email.match(regex);
  if (!validEmail) {
    return { error: { code: 400, message: '"email" must be a valid email' } };
  }

  if (data.password.length < 6) {
    return { error:
      { code: 400, message: '"password" length must be at least 6 characters long' } };
  }
  
  const userLogin = await User.findOne({ where: { email: data.email } });
    if (userLogin) return { error: { code: 409, message: 'User already registered' } };
    return true;
};

module.exports = validations;