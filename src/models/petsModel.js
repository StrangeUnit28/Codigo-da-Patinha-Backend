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

export const createPets = async (data) => {
    return await prismaClient.pets.create({
        data,
    });
};

export const updatePets = async (id, data) => {
    return await prismaClient.pets.update({
        where: { id },
        data,
    });
};

export const deletePets = async (id) => {
    return await prismaClient.pets.delete({
        where: { id },
    });
};
