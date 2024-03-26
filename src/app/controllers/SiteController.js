const { typeorm } = require('typeorm');
const { getRepository } = "typeorm";
const { users } = "./entity/user.entity";
const express = require('express');
const app = express();

class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

app.route("search", async(request, response) => {
    try {
        const { userId } = request.body.user;
        const user = await getRepository(users).findOneBy({ id: userId });
        if (!user) {
            return response.status(404).json({ message: "Khong tim thay" });
        }
        const { password, ...userInfo } = user;
        response.json({ user: userInfo });
    } catch (error) {
        console.error("Loi khong tim thay nguoi dung phu hop", error);
        response.status(500).json({ message: "loi" });
    }
})

module.exports = new SiteController();