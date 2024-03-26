import  express from "express";
import { createConnection } from "typeorm";
// import authRoutes from "./authRoutes.ts";


const app = express();
app.use(express.json());

// app.use("/auth", authRoutes);
   
const port = process.env.port || 3000;


createConnection()
.then(() => {
    app.listen(port, () => {
        console.log(`sever running port ${port}`);
    });
})
    .catch(error => {
        console.error("Error connecting to database:", error);
    });

