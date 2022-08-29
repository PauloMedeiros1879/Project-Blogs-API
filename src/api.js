const express = require('express');
const loginRouter = require('./route/loginRoute');
const userRouter = require('./route/userRoute');
const categoriesRouter = require('./route/categoriesRoute');
const postRouter = require('./route/postRoute');

const error = require('./middlewares/error');
// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use(error);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
