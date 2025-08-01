import { Hono } from "hono";
export const blogRoute = new Hono();

blogRoute.post('/',(c)=>{
    return c.text('blog post')
});
blogRoute.put('/',(c)=>{
    return c.text('update blog')
});
blogRoute.get('/:id',(c)=>{
    return c.text('signin')
});
