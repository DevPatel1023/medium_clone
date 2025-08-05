import z from "zod";
export declare const signUpSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    username: z.ZodString;
}, z.core.$strip>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export declare const signInSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type SignInInput = z.infer<typeof signInSchema>;
