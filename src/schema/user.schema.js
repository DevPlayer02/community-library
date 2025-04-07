import { z } from 'zod';

const userSchema = z.object({
    username: z.string().min(3, 'Username is required'),
    email: z.string().email('Invalid email'),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/, 'Password must contain at least 6 characters, one uppercase letter, one number and one special character'),
    avatar: z.string().url('Invalid URL').optional()
})

const userIdSchema = z.object({
    userId: z.number().int().positive('User ID must be a positive integer')
})

export { userSchema, userIdSchema };