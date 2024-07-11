const { PrismaClient } = require("@prisma/client");
const { response } = require("../herlpers/common");
const createHttpError = require("http-errors");
const prisma = new PrismaClient();

const profile = async(req, res, next)=>{
    try {
        const email = req.decoded.email 
        const user = await prisma.user.findFirst({
            where:{
                email: email
            }
        })
        if(!user){
            next(createHttpError(403, 'User invalid'))
        }
        delete user.password
        response(res, user, 200, "get profile success");

    } catch (error) {
        console.log(error);
        next(new createHttpError.InternalServerError());
    }
}
const updateProfile = async(req, res, next)=>{
    try {
        const {name, phone, photo} = req.body

        const email = req.decoded.email 
        const user = await prisma.user.findFirst({
            where:{
                email: email
            }
        })
        const userUpdated = await prisma.user.update({
            data:{
                name,
                phone,
                ...(photo ? {photo}:{})
            },
            where:{
                id: user.id
            }
        })
        response(res, userUpdated, 200, "update profile success");

    } catch (error) {
        console.log(error);
        next(new createHttpError.InternalServerError());
    }
}

module.exports = {
    profile,
    updateProfile
}