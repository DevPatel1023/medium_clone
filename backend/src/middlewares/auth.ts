import { verify } from "hono/jwt";
import { env } from "hono/adapter";
import { Context, Next } from "hono";

export const auth = async (c:Context,next:Next) => {
  try {
    const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c);

    // get the auth header
    const authHeader = c.req.header("Authorization");
    // check if it is present or not
    if (!authHeader) {
      return c.json({
        error: "Authorization header missing",
      });
    }

    // get the token from auth header by split and take 1 index argument
    const token = authHeader.split(" ")[1];
    // verify the token
    const payload = await verify(token, JWT_SECRET);

    // Save user payload for later use in handlers
    c.set("user", payload);

    // calling next so the next fun run
    await next();
  } catch (e: any) {
    return c.json(
      {
        message: "unauthorized",
        error: e.message,
      },
      401
    );
  }
};
