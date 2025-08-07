import { Hono } from "hono";
import { mainRoute } from "./routes/mainRoutes";
import { auth } from "./middlewares/auth";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// cors
app.use(
  '/api/*',
  cors({
    origin: 'http://localhost:5173', 
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
);

// middleware
app.use("/api/v1/blog/*", auth);

// route
app.route("/api/v1", mainRoute);

export default app;
