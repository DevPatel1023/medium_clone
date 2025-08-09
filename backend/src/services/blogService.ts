import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export async function createBlog(
  db_url: string,
  title: string,
  content: string,
  authorId: string
) {
  const prisma = new PrismaClient({
    datasourceUrl: db_url,
  }).$extends(withAccelerate());

  // create new blog and store in db
  const newBlog = await prisma.blog.create({
    data: { title, content, authorId },
  });

  return {
    newBlog,
  };
}

export async function updateBlog(
  db_url: string,
  id: string,
  title: string,
  content: string
) {
  const prisma = new PrismaClient({
    datasourceUrl: db_url,
  }).$extends(withAccelerate());

  // update blog
  const updatedBlog = await prisma.blog.update({
    where: { id },
    data: { title, content },
  });

  return {
    updatedBlog,
  };
}

export async function getBlogId(db_url: string, id: string) {
  const prisma = new PrismaClient({
    datasourceUrl: db_url,
  }).$extends(withAccelerate());

  // get blog by id
  const blog = await prisma.blog.findUnique({
    where: { id },
    select: {
      title: true,
      content: true,
      createdAt: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return {
    blog,
  };
}

export async function getBlogs(db_url: string, page: number = 1) {
  const prisma = new PrismaClient({
    datasourceUrl: db_url,
  }).$extends(withAccelerate());

  const limit = 10;
  const skip = (page - 1) * limit;

  // get blogS
  const blogs = await prisma.blog.findMany({
    skip,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true, // Add this
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  console.log("DEBUG blogs from DB:", blogs);

  const total = await prisma.blog.count();

  return {
    blogs,
    total,
    page,
  };
}
