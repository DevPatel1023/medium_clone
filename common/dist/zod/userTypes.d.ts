import z from "zod";
export declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    username: z.ZodString;
}, z.core.$strip>;
export type SignUpInput = z.infer<typeof signupInput>;
export declare const signInInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type SignInInput = z.infer<typeof signInInput>;
