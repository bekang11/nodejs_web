// import express, {request,response} from "express";
// import { getRepository } from "typeorm";
// const { users } = "./entity/user.entity";


// const router = express.Router();


// app.route("pageadd", async(request, response) => {
//     try {
//         const { id, username, password, fullname } = request.body;


//         // Crerate a new user
//         const user = new users();
//         user.id = id;
//         user.fullname = fullname;
//         user.username = username;
//         user.password = password;

//         //save user to db

//         await getRepository(users).save(user);

//         response.status(201).json({ message: "Dang ky thanh cong" });
//     } catch (error) {
//         console.error("Dang ky khong thanh cong", error);
//         response.status(500).json({ message: "loi" });
//     }
// })





// router.post("/pageupdate", async (request,response) => 
// {
//     try{
//         const {fullname, password} = request.body;

//         //find user by fullname
//         const user = await getRepository(User).findOne({where: {fullname}});

//         if (!user) {
//             return response.status(400).json({ message: "Nguoi dung khong ton tai" });
//         }

//         //compare password
//         const isPasswordMatch = password.compare(password, user.password);

//         if(!isPasswordMatch){
//             return response.status(400).json({message: "Loi"});
//         }
//     }
// })