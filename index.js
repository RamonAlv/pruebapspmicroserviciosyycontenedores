require('./config/config');
const PORT = 3300

const express = require('express');

const { sequelize } = require('./models/index')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routers/index'));

app.listen(PORT, () => {
    console.log(`run server http//:127.0.0.1:${PORT}`);

    sequelize.authenticate().then(() => {
        console.log('conected in the data base');
    }).catch(() => {
        console.log('There is not conection in the data base');
    });
});