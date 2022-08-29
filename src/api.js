const express = require('express');
const loginRouter = require('./route/loginRoute');
const userRouter = require('./route/userRoute');

const error = require('./middlewares/error');
// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use('/user', userRouter);

app.use(error);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
