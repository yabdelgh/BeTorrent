import z from "zod";


export const AccountRecoverySchema = z.object({
    email: z.string().email('Enter a valid email'),
})