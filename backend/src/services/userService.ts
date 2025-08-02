import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
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

  const newUser = await prisma.user.create({
    data: { email, name, password },
  });

  const jwt_token = await sign({ id: newUser.id }, jwt_secret);

  return {
    newUser,
    jwt_token
  } ;
}
