import { User } from '../models/user';

export default class userController {
    async Index(req, res) {
        const users = await User.findAll();

        res.status(201).json(users);
    }
    async Show(req, res) {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        return res.status(201).json(user)
    }
    async Create(req, res) {
        const { email } = req.body;

        if (await User.findOne({ where: { email: email } })) {
            return res.status(400).json({ msg: 'user already exists' });
        }

        await User.create(req.body);


        return res.status(201).json({ msg: 'success' });
    }
    async Update(req, res) {
        const userId = req.params.id;

        const query = {
            where: { id: userId },
            limit: 1,
            individualHooks: true,
        };

        try {
            await User.update(req.body, query);
            return res.status(200).json({ msg: 'success' });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    async Delete(req, res) {
        const userId = req.params.id;

        const query = {
            where: { id: userId },
            limit: 1,
        };

        try {
            await User.destroy(query);
            return res.status(200).json({ msg: 'success' });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

new userController();