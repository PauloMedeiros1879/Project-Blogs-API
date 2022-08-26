const errorMiddleware = (err, _req, res, _next) => {
  const { message, code } = err;
  
  if (code) {
    return res.status(code).json({ message });
  }
  return res.status(500).json({ message: 'Erro inesperado no servidor' });
};

module.exports = errorMiddleware;