import {
    findAllAdoptions,
    findAdoptionById,
    createAdoption,
    updateAdoption,
    deleteAdoption,
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
    const { nome, email,telefone, endereco} = req.body;
    try {
        const adocao = await createAdoption({ nome, email, endereco, telefone});
        return res.status(201).json(adocao);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const updateAdoption = async (req, res) => {
    const { id } = req.params;
    const { nome, email,telefone, endereco} = req.body;
    try {
        const adocao = await updateAdoption(id, { nome, email, telefone, endereco });
        return res.status(200).json(adocao);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteAdoption = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteAdoption(id);
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
