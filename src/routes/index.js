const newsRouter = require('./news');
const clipsRouter = require('./clips');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/clips', clipsRouter);
    app.use('search', siteRouter);
    app.use('/', siteRouter);
}

module.exports = route;
