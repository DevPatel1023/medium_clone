import { Hono } from "hono";
import { signinUser, signupUser } from "../services/userService";
import { env } from "hono/adapter";
import { signInInput, signupInput } from "@adp_2sdcp/common-medium-clone";

export const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRoute.post("/signup", async (c) => {
  try {
    const { email, name, password } = await c.req.json();
    // sanatize body using zod
    // {
    //   email : string,
    //   username : string,
    //   password : string,
    // }

    const result = signupInput.safeParse({ email, password, username: name });
    if (!result.success) {
      return c.json({ error: result.error.format() }, 411);
    }

    const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c);

    const { newUser, jwt_token } = await signupUser(
      c.env.DATABASE_URL,
      email,
      name,
      password,
      JWT_SECRET
    );
    return c.json({
      message: "new user created",
      newUser,
      jwt_token,
    });
  } catch (e: any) {
    return c.json(
      {
        error: e.message,
      },
      400
    );
  }
});

userRoute.post("/signin", async (c) => {
  try {
    const { email, password } = await c.req.json();

    const result = signupInput.safeParse({ email, password });
    if (!result.success) {
      return c.json({ error: result.error.format() }, 411);
    }
    const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c);
    // pass the data to the fun
    const { user, jwt_token } = await signinUser(
      c.env.DATABASE_URL,
      JWT_SECRET,
      email,
      password
    );

    return c.json({
      message: "welcome user",
      user,
      jwt_token,
    });
  } catch (e: any) {
    return c.json({
      error: e.message,
    });
  }
});
