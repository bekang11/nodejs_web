const { typeorm } = require('typeorm');
const { getRepository } = "typeorm";
const { users } = "./entity/user.entity";
const express = require('express');
const app = express();

class PageUpdateController {

    // [GET] /update
    index(req, res) {
        res.render('pageupdate');
    }
    show() {}

}

// app.route("/pageupdate", async(request, response) => {
//     try {
//         const { fullname, password } = request.body;

//         //find user by fullname
//         const user = await getRepository(users).findOne({ where: { fullname } });

//         if (!user) {
//             return response.status(400).json({ message: "Nguoi dung khong ton tai" });
//         }

//         //compare password
//         const isPasswordMatch = password.compare(password, user.password);

//         if (!isPasswordMatch) {
//             return response.status(400).json({ message: "Loi" });
//         }
//     }
// })

module.exports = new PageUpdateController();