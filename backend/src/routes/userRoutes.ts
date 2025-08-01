import { Hono } from "hono";
export const userRoute = new Hono();

userRoute.post('/signup',(c)=>{
    return c.text('signup')
});
userRoute.post('/signin',(c)=>{
    return c.text('signin')
});
