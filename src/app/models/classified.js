import { DataTypes, Model } from 'sequelize';
import database from '../../config/database';

export class Classified extends Model { }

Classified.init({
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    description: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
}, {
    tableName: 'classifieds',
    sequelize: database
});
