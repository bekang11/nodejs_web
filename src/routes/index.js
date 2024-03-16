const page1Router = require('./page1');
const siteRouter = require('./site');

function route(app) {
    app.use('/page1', page1Router);

    app.use('/', siteRouter);
}
module.exports = route;
