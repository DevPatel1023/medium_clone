import { verify } from "hono/jwt";
import { env } from "hono/adapter";
import type { Context, Next } from "hono";
import { error } from "console";

export const auth = async (c: Context, next: Next) => {
  try {
    const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c);

    const authHeader = c.req.header("Authorization");
    if (!authHeader) {
      return c.json({
        error: "Authorization header missing",
      });
    }

    const token = authHeader.replace("Bearer ", "");
    const payload = await verify(token, JWT_SECRET);

    // Save user payload for later use in handlers
    c.set("user", payload);

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
