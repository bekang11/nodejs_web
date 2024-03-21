const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const { Client } = require('pg');
const { typeorm } = require('typeorm');


// // establish database connection
// myDataSource
//     .initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization:", err)
//     })

// // create and setup express app
// app.use(express.json())

// // register routes
// app.get("/users", async function(req, res) {
//     const users = await myDataSource.getRepository(User).find()
//     res.json(users)
// })

// app.get("/users/:id", async function(req, res) {
//     const results = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     return res.send(results)
// })

// app.post("/users", async function(req, res) {
//     const user = await myDataSource.getRepository(User).create(req.body)
//     const results = await myDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.put("/users/:id", async function(req, res) {
//     const user = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     myDataSource.getRepository(User).merge(user, req.body)
//     const results = await myDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.delete("/users/:id", async function(req, res) {
//     const results = await myDataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })

// start express server

// app.listen(3000)

// //database
// const client = new Client({
//     user: "postgres",
//     password: "123456",
//     host: "localhost",
//     port: 5432,
//     database: "demodb"

// })

// client.connect()
//     .then(() => console.log("Connected successfuly"))
//     // .then(() => client.query("select * from users")) // call users
//     // .then(() => client.query("select * from users where name = $1", ["Nguyen Manh Hoang"])) //GET users
//     // .then(() => client.query("insert into users values ($1, $2, $3)", [4, 'Nguyen Van A', '0563489349'])) //ADD users
//     // .then(() => client.query("update users set name = $1", ['Nguyen Van B'])) // UPDATE ALL USERS
//     .then(() => client.query("update users set name = $1", ['Nguyen Van C']))
//     .then(() => client.query("select * from users"))
//     .then(results => console.table(results.rows))
//     .catch(e => console.log(e))
//     .finally(() => client.end())


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