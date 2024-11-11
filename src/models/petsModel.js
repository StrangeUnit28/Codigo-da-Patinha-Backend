import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export const findAllPets = async () => {
    return await prismaClient.pets.findMany();
};

export const findPetById = async (id) => {
    return await prismaClient.pets.findUnique({
        where: { id },
    });
};

export const createPet = async (data) => {
    return await prismaClient.pets.create({
        data,
    });
};

export const updatePet = async (id, data) => {
    return await prismaClient.pets.update({
        where: { id },
        data,
    });
};

export const deletePet = async (id) => {
    return await prismaClient.pets.delete({
        where: { id },
    });
};
