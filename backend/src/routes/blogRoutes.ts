import { Hono } from "hono";
import {
  createBlog,
  getBlogId,
  getBlogs,
  updateBlog,
} from "../services/blogService";
import {
  createBlogSchema,
  updateBlogSchema,
} from "@adp_2sdcp/common-medium-clone";

//  zod scema
// {
//   title : string,
//   content : string,
//   user : string,
//   authorId : string,
// }

export const blogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    user: any;
  };
}>();

// create blog
blogRoute.post("/create", async (c) => {
  try {
    const user = c.get("user");
    const { title, content } = await c.req.json();
    const authorId = user.id;

    // validating inputs via zod
    const result = createBlogSchema.safeParse({
      title,
      content,
    });

    if (!result.success) {
      return c.json(
        {
          error: "Invalid inputs",
          details: result.error.flatten(),
        },400
      );
    }

    const { newBlog } = await createBlog(
      c.env.DATABASE_URL,
      title,
      content,
      authorId
    );
    return c.json(newBlog);
  } catch (error) {
    return c.json(
      {
        error: "error while creating a blog",
      },
      400
    );
  }
});

// update blog
blogRoute.put("/:id", async (c) => {
  try {
    const { id } = await c.req.param();
    const { title, content } = await c.req.json();

    const result = createBlogSchema.safeParse({
      title,
      content,
      id 
    });

    if (!result.success) {
      return c.json(
        {
          error: "Invalid inputs",
          details: result.error.flatten(),
        },400
      );
    }


    const { updatedBlog } = await updateBlog(
      c.env.DATABASE_URL,
      id,
      title,
      content
    );
    return c.json(updatedBlog);
  } catch (error) {
    return c.json(
      {
        error: "error while updating a blog",
      },
      400
    );
  }
});

// get all blogs
blogRoute.get("/blogs", async (c) => {
  try {
    const { blogs, total, page } = await getBlogs(c.env.DATABASE_URL);
    return c.json({ blogs, total, page });
  } catch (error) {
    return c.json(
      {
        error: "error while getting blogs",
      },
      400
    );
  }
});

// get blog by id
blogRoute.get("/:id", async (c) => {
  try {
    const { id } = await c.req.param();

    const { blog } = await getBlogId(c.env.DATABASE_URL, id);
    return c.json(blog);
  } catch (error) {
    return c.json(
      {
        error,
      },
      400
    );
  }
});
