const { typeorm } = require('typeorm');
const { getRepository } = "typeorm";
const { users } = "./entity/user.entity";
const express = require('express');
const app = express();


class PageDeleteController {
    // [GET] /delete
    index(req, res) {
        res.render('pagedelete');
    }

    show() {}
}

app.route("pagedelete", async(request, response) => {
    try {
        const { id, username, password, fullname } = request.body;



        await getRepository(users).save(user);

        response.status(201).json({ message: "Dang ky thanh cong" });
    } catch (error) {
        console.error("Dang ky khong thanh cong", error);
        response.status(500).json({ message: "loi" });
    }
})


module.exports = new PageDeleteController();