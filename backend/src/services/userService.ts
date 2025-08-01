import { PrismaClient } from '../generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'


export async function signupUser(
  dbUrl: string,
  email: string,
  name: string,
  password: string
) {
  const prisma = new PrismaClient({
    datasourceUrl: dbUrl
  }).$extends(withAccelerate())

  const isExisitingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (isExisitingUser) {
    throw new Error('user already exists')
  }

  return prisma.user.create({
    data: { email, name, password }
  })
}
