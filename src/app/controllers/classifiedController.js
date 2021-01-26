import { Classified } from '../models/classified';

export default class ClassifiedController {
    async Index(req, res) {
        const classifieds = await Classified.findAll();

        res.status(201).json(classifieds);
    }
    async Show(req, res) {
        const classifiedId = req.params.id;
        const classified = await Classified.findByPk(classifiedId);

        return res.status(201).json(classified)
    }
    async Create(req, res) {
        try {
            await Classified.create(req.body);
            return res.status(201).json({ msg: 'success' });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ msg: 'error' });
        }
    }
    async Update(req, res) {
        const classifiedId = req.params.id;

        const query = {
            where: { id: classifiedId },
            limit: 1,
            individualHooks: true,
        };

        try {
            await Classified.update(req.body, query);
            return res.status(200).json({ msg: 'success' });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    async Delete(req, res) {
        const classifiedId = req.params.id;

        const query = {
            where: { id: classifiedId },
            limit: 1,
        };

        try {
            await Classified.destroy(query);
            return res.status(200).json({ msg: 'success' });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

new ClassifiedController();