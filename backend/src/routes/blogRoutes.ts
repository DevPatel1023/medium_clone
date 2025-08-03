import { Hono } from "hono";
import { createBlog, getBlogId, updateBlog } from "../services/blogService";
import { env } from "hono/adapter";

export const blogRoute = new Hono<{
    Bindings : {
        DATABASE_URL : string,
    }
}>();

// create blog
blogRoute.post('/create',async (c) =>{
    try {
        const {title,content,authorId} = await c.req.json();

        const {newBlog} = await createBlog(
            c.env.DATABASE_URL,
            title,
            content,
            authorId
        )
        return c.json(
            newBlog
        );
    } catch (error) {
        return c.json({
            error
        },400);
    }
});

// update blog
blogRoute.put('/:id',async(c)=>{
    try {
        const {id} = await c.req.param();
        const {title,content} = await c.req.json();

        const {updatedBlog} = await updateBlog(
            c.env.DATABASE_URL,
            id,
            title,
            content,
        )
        return c.json(
            updateBlog
        );
    } catch (error) {
        return c.json({
            error
        },400);
    }
});

// get blog by id
blogRoute.get('/:id',async(c)=>{
    try {
        const {id} = await c.req.param();

        const {blog} = await getBlogId(
            c.env.DATABASE_URL,
            id,
        )
        return c.json(
            blog
        );
    } catch (error) {
        return c.json({
            error
        },400);
    }
});

// get all blogs 
blogRoute.get('/blogs',async(c)=>{
    try {

        const {blogs} = await getBlogs(
            c.env.DATABASE_URL,
        )
        return c.json(
            blog
        );
    } catch (error) {
        return c.json({
            error
        },400);
    }
});
