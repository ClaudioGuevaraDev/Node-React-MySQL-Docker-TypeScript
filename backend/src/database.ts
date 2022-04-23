import { DataSource } from "typeorm"
import { Task } from "./entities/Task"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "database",
    port: 3306,
    username: "root",
    password: "claudio123",
    database: "example",
    entities: [Task],
    synchronize: true
})