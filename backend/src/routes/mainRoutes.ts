import { Hono } from "hono";
import {userRoute} from './userRoutes';
import {blogRoute} from './blogRoutes';
export const mainRoute = new Hono();

mainRoute.route('/user',userRoute);
mainRoute.route('/blog',blogRoute);