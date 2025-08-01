import { PrismaClient } from '../generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

// create prisma client with accelerate
const prisma = new PrismaClient().$extends(withAccelerate());

export async function signupUser(email : string , name : string ,password : string){
    const isExisitingUser = await prisma.user.findUnique({ where : { email } })
    if(isExisitingUser){
        throw new Error('user already exists');
    } 
    return prisma.user.create({
        data : { email , name , password }
    })
}