import {
    findAllAdoptions,
    findAdoptionById,
    createAdocao,
    updateAdocao,
    deleteAdocao,
} from "../models/adotantesModel.js";

export const getAllAdoptions = async (req, res) => {
    try {
        const adocoes = await findAllAdoptions();
        return res.status(200).json(adocoes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getAdoptionById = async (req, res) => {
    const { id } = req.params;
    try {
        const adocao = await findAdoptionById(id);
        return res.status(200).json(adocao);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createAdoption = async (req, res) => {
    const { pet_id, adotante_id, data_adocao } = req.body;
    try {
        const adocao = await createAdocao({ pet_id, adotante_id, data_adocao });
        return res.status(201).json(adocao);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const updateAdoption = async (req, res) => {
    const { id } = req.params;
    const { pet_id, adotante_id, data_adocao } = req.body;
    try {
        const adocao = await updateAdocao(id, { pet_id, adotante_id, data_adocao });
        return res.status(200).json(adocao);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteAdoption = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteAdocao(id);
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
