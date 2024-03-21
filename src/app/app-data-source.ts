import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "demodb",
    entities: ["src/entity/user.entity.ts"],
    logging: true,
    synchronize: false,
})