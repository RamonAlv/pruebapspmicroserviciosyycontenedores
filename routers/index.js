const express = require('express');

const app = express();

app.use('/api/sps/helloworld/', require('./helloWorld/helloWorldRouter'));

app.use('/api/sps/user/', require('./user/userRouter'));

module.exports = app;