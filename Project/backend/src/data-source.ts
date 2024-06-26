import "reflect-metadata"
import { DataSource } from "typeorm"
import { Parfum } from "./entity/Parfum"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "parfumok",
    synchronize: true,
    logging: true,
    entities: [Parfum],
    migrations: [],
    subscribers: [],
})
