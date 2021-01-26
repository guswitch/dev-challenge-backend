import { DataTypes, Model } from 'sequelize';
import database from '../../config/database';

export class Session extends Model { }

Session.init({
    token: {
        type: new DataTypes.STRING,
        required: true,
    },
}, {
    tableName: 'sessions',
    sequelize: database
})