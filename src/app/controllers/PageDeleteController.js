class PageDeleteController {

    // [GET] /delete
    index(req, res) {
        res.render('pagedelete');
    }

    show() {}
}

module.exports = new PageDeleteController();