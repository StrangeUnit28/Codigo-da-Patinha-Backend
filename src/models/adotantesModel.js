import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export const findAllUsuarios = async () => {
    return await prismaClient.adotantes.findMany();
};

export const findUsuarioById = async (id) => {
    return await prismaClient.adotantes.findUnique({
        where: { id },
    });
};

export const createUsuario = async (data) => {
    return await prismaClient.adotantes.create({
        data,
    });
};

export const updateUsuario = async (id, data) => {
    return await prismaClient.adotantes.update({
        where: { id },
        data,
    });
};

export const deleteUsuario = async (id) => {
    return await prismaClient.adotantes.delete({
        where: { id },
    });
};
