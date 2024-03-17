const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const { Client } = require('pg');

//database
const client = new Client({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: 5432,
    database: "demodb"

})

client.connect()
    .then(() => console.log("Connected successfuly"))
    .then(() => client.query("select * from users"))
    .then(results => console.table(results.rows))
    .catch(e => console.log)
    .finally(() => client.end())


const route = require('./routes');

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
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes innit
route(app);

app.listen(port, () => {
    console.log(`Example app listening at  http://localhost:${port}`);
});