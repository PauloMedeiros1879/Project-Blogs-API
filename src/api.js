const express = require('express');
const loginRouter = require('./route/loginRoute');
const error = require('./middlewares/error');
// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);

app.use(error);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
