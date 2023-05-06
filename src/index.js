const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');

const db = require('./config/db');
//Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set(
    'view engine',
    'hbs',
);
//console.log(app.get('view engine'));

app.set('views', path.join(__dirname, 'resources', 'views'));
//console.log(app.get('view'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));

//route init
route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
