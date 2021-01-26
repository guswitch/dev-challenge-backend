import { DataTypes, Model } from 'sequelize';
import database from '../../config/database';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export class User extends Model {
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
    generateToken({ email }) {
        return jwt.sign(email, 'A-really-hard-secret');
    }
}

User.init({
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true
    },
    password: {
        type: new DataTypes.STRING,
        allowNull: false
    },
}, {
    hooks: {
        beforeSave: async (user) => {
            user.password = await bcrypt.hash(user.password, 10);
        },
    },
    tableName: 'users',
    sequelize: database
});
