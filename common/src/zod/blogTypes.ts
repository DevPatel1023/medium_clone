import z from 'zod'

export const createBlogSchema = z.object({
    title : z.string(),
    content : z.string(),
})
// type infer for signin
export type createBlogInput = z.infer<typeof createBlogSchema>

export const updateBlogSchema = z.object({
    title : z.string(),
    content : z.string(),
    id : z.string()
})
// type infer for signin
export type updateBlogInput = z.infer<typeof updateBlogSchema>