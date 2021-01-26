import { Session } from "../models/session";
import { User } from "../models/user";
const userObj = new User();


export default class SessionController {
    async Store(req, res) {
        // Desestruturando o corpo da requisição
        const { email, password } = req.body;
        // Tentando achar algum usuario que tenha esse determinado username
        const user = await User.findOne({ where: { email: email } });
        // Verificando se foi ou não retornado algum usuario
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        if (!await user.comparePassword(password)) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        // const token = await Token.create({_userId: user._id, token: jwt.sign({username},tokenSettings.secret,{expiresIn: tokenSettings.ttl})});
        const session = await Session.create({ userId: user.id, token: userObj.generateToken(user) });

        // return res.json({user, token: User.generateToken(user)});
        return res.status(200).json({ token: session.token });
    }
}

new SessionController();