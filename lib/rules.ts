import { z } from 'zod';

export const RegisterFormSchema = z.object({
    email: z.string().email({message: 'Please enter a valid email.'}).trim(),
    password: z.string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter." })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character."
    }).trim(),
    confirm_password: z.string().trim(),
    verify_human: z.string().includes("5", { message: "Are you a bot? Try again!" }),
    privacy_policy: z.string().trim()
}).superRefine((value, context) => {
    if(value.password !== value.confirm_password) {
        return context.addIssue({ code: z.ZodIssueCode.custom, message: "Password fields must match.", path: ['confirm_password']})
    }
})