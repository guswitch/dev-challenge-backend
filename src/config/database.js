import { Sequelize } from "sequelize";
const config = {}
const database = new Sequelize('mariadb://root:@localhost:3306/newspaper-classified');

export default database;