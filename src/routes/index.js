const pageUpdateRouter = require('./pageupdate');
const pageAddRouter = require('./pageadd');
const pageDeleteRouter = require('./pagedelete');
const siteRouter = require('./site');

function route(app) {
    app.use('/pageupdate', pageUpdateRouter);

    app.use('/pagedelete', pageDeleteRouter);

    app.use('/pageadd', pageAddRouter);

    app.use('/', siteRouter);


}
module.exports = route;