import { prismaClient } from "../src/application/database.js"
import bcrypt from "bcrypt"

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "cicaco07"
        }
    });
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "cicaco07",
            password: await bcrypt.hash("rahasia", 10),
            token: "test",
        }
    });
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "cicaco07",
        }
    });
}