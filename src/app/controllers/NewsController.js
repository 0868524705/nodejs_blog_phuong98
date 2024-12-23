class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    detail(req, res) {
        res.render('nodejs.hbs');
    }
}

module.exports = new NewsController();
