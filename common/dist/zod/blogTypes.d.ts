import z from 'zod';
export declare const createBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type createBlogInput = z.infer<typeof createBlogSchema>;
export declare const updateBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>;
export type updateBlogInput = z.infer<typeof updateBlogSchema>;
