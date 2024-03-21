class PageAddController {

    // [GET] /add
    index(req, res) {
        res.render('pageadd');
    }

    show() {}
}

module.exports = new PageAddController();