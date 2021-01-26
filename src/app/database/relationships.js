import { Classified } from '../models/classified';
import { Session } from '../models/session';
import { User } from '../models/user';

User.hasMany(Classified, { foreignKey: 'userId' });
Classified.belongsTo(User, { foreignKey: 'userId' });


User.hasOne(Session, { foreignKey: 'userId' });
Session.belongsTo(User, { foreignKey: 'userId' });