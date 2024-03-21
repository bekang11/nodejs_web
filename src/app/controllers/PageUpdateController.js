class PageUpdateController {

    // [GET] /update
    index(req, res) {
        res.render('pageupdate');
    }
    show() {}

}

module.exports = new PageUpdateController();