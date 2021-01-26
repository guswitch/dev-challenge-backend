import express from 'express';
import cors from 'cors';
import requireDir from 'require-dir';
import database from './src/config/database';
import routes from './routes';

export default class App {
    app = express();
    constructor() {
        this.middlewares()
        this.database();
        this.routes();
        this.listener()
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }
    async database() {
        try {
            await database.authenticate({ logging: false });
            console.log('Database connected');
            requireDir('./src/app/models/');
            require('./src/app/database/relationships');
            database.sync({ logging: false });
            console.log('Tables created');
        } catch (error) {
            console.error(`Database doesn't connected \n ${error}`);
        }
    }
    routes() {
        this.app.use(routes);
    }
    listener() {
        this.app.listen(3000, () => {
            console.log(`Server listening in http://localhost:3000`);
        });
    }
}

new App().app;