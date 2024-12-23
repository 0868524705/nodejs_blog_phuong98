const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // Action -- router -- Dispatcher -- Funtion handler
    app.use('/news', newRouter);
    app.use('/', siteRouter);
}
module.exports = route;
