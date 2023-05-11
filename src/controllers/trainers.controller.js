const TrainerModel = require('../model/trainer.model');
const { getByQuery } = require('./pokemons.controller');

const getByID = async (req, res) => {
    try {
        const trainer = await TrainerModel.findById(req.params.id);
        if (!trainer) {
            throw new Error();
        }
        return res.status(200).send(trainer);
    } catch (err) {
        return res.status(400).json({
            error: '@trainers/getByID',
            message: err.message || 'Failed to get trainer by id',
        });
    }
};

const getByName = async (req, res) => {
    try {
        const trainer = await TrainerModel.findOne({ name: req.params.name });
        if (!trainer) {
            throw new Error();
        }
        return res.status(200).send(trainer);
    } catch (err) {
        return res.status(400).json({
            error: '@trainers/getByName',
            message: err.message || 'Failed to get trainer by name',
        });
    }
};

const create = async (req, res) => {
    try {
        const trainer = new TrainerModel(req.body);
        const pokemons = await getByQuery({ _id: { $in: trainer.pokemons } });
        trainer.pokemons = pokemons;
        await trainer.save();
        return res.status(201).send(trainer);
    } catch (err) {
        return res.status(400).json({
            error: '@trainers/create',
            message: err.message || 'Failed to create trainer',
        });
    }
};

const updateById = async (req, res) => {
    try {
        const trainer = await TrainerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!trainer) {
            throw new Error();
        }
        return res.status(200).send(trainer);
    } catch (err) {
        return res.status(400).json({
            error: '@trainers/updateById',
            message: err.message || 'Failed to update trainer by id',
        });
    }
};

const updateByName = async (req, res) => {
    try {
        const trainer = await TrainerModel.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
        if (!trainer) {
            throw new Error();
        }
        return res.status(200).send(trainer);
    } catch (err) {
        return res.status(400).json({
            error: '@trainers/updateByName',
            message: err.message || 'Failed to update trainer by name',
        });
    }
};

const deleteById = async (req, res) => {
    try {
        const trainer = await TrainerModel.findByIdAndDelete(req.params.id);
        if (!trainer) {
            throw new Error();
        }
        return res.status(200).send(trainer);
    } catch (err) {
        return res.status(400).json({
            error: '@trainers/deleteById',
            message: err.message || 'Failed to delete trainer by id',
        });
    }
}

const deleteByName = async (req, res) => {
    try {
        const trainer = await TrainerModel.findOneAndDelete({ name: req.params.name });
        if (!trainer) {
            throw new Error();
        }
        return res.status(200).send(trainer);
    } catch (err) {
        return res.status(400).json({
            error: '@trainers/deleteByName',
            message: err.message || 'Failed to delete trainer by name',
        });
    }
}

module.exports = {
    getByID,
    getByName,
    create,
    updateById,
    updateByName,
    deleteById,
    deleteByName,
};