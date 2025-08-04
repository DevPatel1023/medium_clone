import z from "zod";

export const signupInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    username : z.string().min(3)
})

// type infer for signin
export type SignUpInput = z.infer<typeof signupInput>

export const signInInput = z.object({
    username : z.string(),
    password : z.string().min(6),
})

// type infer for signin
export type SignInInput = z.infer<typeof signInInput>