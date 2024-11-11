import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export const findAllAdoptions = async () => {
    return await prismaClient.adocoes.findMany();
};

export const findAdoptionById = async (id) => {
    return await prismaClient.adocoes.findUnique({
        where: { id },
    });
};

export const createAdoption = async (data) => {
    return await prismaClient.adocoes.create({
        data,
    });
};

export const updateAdoption = async (id, data) => {
    return await prismaClient.adocoes.update({
        where: { id },
        data,
    });
};

export const deleteAdoption = async (id) => {
    return await prismaClient.adocoes.delete({
        where: { id },
    });
};