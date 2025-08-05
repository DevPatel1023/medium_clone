import z from "zod";

export const signUpSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    username : z.string().min(3)
})

// type infer for signin
export type SignUpInput = z.infer<typeof signUpSchema>

export const signInSchema = z.object({
    email : z.string(),
    password : z.string().min(6),
})

// type infer for signin
export type SignInInput = z.infer<typeof signInSchema>