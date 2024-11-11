import {
    findAllPets,
    findPetById,
    createPet,
    updatePet,
    deletePet,
} from "../models/petsModel.js";

export const getAllPets = async (req, res) => {
    try {
        const pets = await findAllPets();
        return res.status(200).json(pets);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getPetById = async (req, res) => {
    const { id } = req.params;
    try {
        const pet = await findPetById(id);
        return res.status(200).json(pet);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createPet = async (req, res) => {
    const { nome, especie, idade, descricao, status} = req.body;
    try {
        const pet = await createPet({ nome, especie, idade, descricao, status});
        return res.status(201).json(pet);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const updatePet = async (req, res) => {
    const { id } = req.params;
    const { nome, especie, idade, descricao, status} = req.body;
    try {
        const pet = await updatePet(id, { nome, especie, idade, descricao, status });
        return res.status(200).json(pet);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deletePet = async (req, res) => {
    const { id } = req.params;
    try {
        await deletePet(id);
        return res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
