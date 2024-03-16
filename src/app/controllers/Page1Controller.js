class Page1Controller {
    // [GET] /home
    index(req, res) {
        res.render('page1');
    }
    show() {}
}

module.exports = new Page1Controller();
