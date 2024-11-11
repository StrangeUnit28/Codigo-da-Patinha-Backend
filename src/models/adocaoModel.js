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

export const createAdocao = async (data) => {
    return await prismaClient.adocoes.create({
        data,
    });
};

export const updateAdocao = async (id, data) => {
    return await prismaClient.adocoes.update({
        where: { id },
        data,
    });
};

export const deleteAdocao = async (id) => {
    return await prismaClient.adocoes.delete({
        where: { id },
    });
};