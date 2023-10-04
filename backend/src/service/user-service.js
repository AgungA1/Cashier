import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { userLoginValidation, getUserValidation } from "../validation/user-validation.js";
import { ResponseError } from "../error/error-response.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const login = async (request) => {
    const loginRequest = validate(userLoginValidation, request);

    const user = await prismaClient.user.findUnique({
        where: {
            username: loginRequest.username
        },
        select: {
            username: true,
            password: true,
        }
    });

    if(!user){
        throw new ResponseError(401, "Username or password wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);

    if(!isPasswordValid){
        throw new ResponseError(401, "Username or password wrong");
    }

    const token = uuid().toString()

    return prismaClient.user.update({
        data: {
            token : token
        },
        where: {
            username: user.username
        },
        select: {
            token: true
        },
    });
}

const logout = async (username) => {
    username = validate(getUserValidation, username);

    const user = await prismaClient.user.findUnique({
        where: {
            username: username
        }
    });

    if(!user){
        throw new ResponseError(404, 'User is not found');
    }

    return prismaClient.user.update({
        where: {
            username: username,
        }, 
        data: {
            token: null,
        },
        select: {
            username: true,
        }
    });
}

export default {
    login,
    logout
}