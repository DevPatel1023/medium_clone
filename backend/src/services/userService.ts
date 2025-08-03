import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";

export async function signupUser(
  database_url: string,
  email: string,
  name: string,
  password: string,
  jwt_secret : string
) {
  const prisma = new PrismaClient({
    datasourceUrl: database_url,
  }).$extends(withAccelerate());

  const isExisitingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (isExisitingUser) {
    throw new Error("user already exists");
  }

  // hash pass using bcrypt
  const hashedPassword = await bcrypt.hash(password,10);

  const newUser = await prisma.user.create({
    data: { email, name, password:hashedPassword },
  });

  const jwt_token = await sign({ id: newUser.id }, jwt_secret);

  return {
    newUser,
    jwt_token
  } ;
}

export async function signinUser(
  database_url : string,
  jwt_secret : string,
  email : string,
  password : string
){
  const prisma = new PrismaClient({
    datasourceUrl : database_url
  }).$extends(withAccelerate());

  const isExisitingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!isExisitingUser) {
    throw new Error("user not found");
  }

  const isPasswordValid = await bcrypt.compare(password,isExisitingUser.password)
  // check when the password is not correct
  if(!isPasswordValid){
    throw new Error('Invalid email or password')
  }

  const jwt_token = await sign({id:isExisitingUser.id},jwt_secret);

  return {user:isExisitingUser,jwt_token};
}