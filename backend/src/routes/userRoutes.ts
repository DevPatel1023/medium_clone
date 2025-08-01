import { Hono } from "hono";
import { signupUser } from "../services/userService";
export const userRoute = new Hono();

userRoute.post('/signup',async (c)=>{
    try {
        const { email , name , password } = await c.req.json()
        const user = await signupUser(email,name,password)
        return c.json({
            message : 'new user created',
            user
        })
    } catch (e : any) {
        return c.json({
            error : e.message
        },400)
    }
});
userRoute.post('/signin',(c)=>{
    return c.text('signin')
});
