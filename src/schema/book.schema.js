import { z } from 'zod';

const bookSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    author: z.string().min(1, 'Author is required')
});

export { bookSchema };