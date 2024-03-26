const { typeorm } = require('typeorm');
const { getRepository } = "typeorm";
const { users } = "./entity/user.entity.ts";
const express = require('express');
const { route } = require('../../routes/pageupdate');
const app = express();

class PageAddController {

    // [GET] /pageadd
    index(request, response) {
        response.render('pageadd');
    }

    show() {}
}


app.post("pageadd", async(request, response) => {
    try {
        const { id, username, password, fullname } = request.body;


        // Crerate a new user
        const user = new users();
        user.id = id;
        user.fullname = fullname;
        user.username = username;
        user.password = password;

        //save user to db

        await getRepository(users).save(user);

        response.status(201).json({ message: "Dang ky thanh cong" });
    } catch (error) {
        console.error("Dang ky khong thanh cong", error);
        response.status(500).json({ message: "loi" });
    }
})


module.exports = new PageAddController();