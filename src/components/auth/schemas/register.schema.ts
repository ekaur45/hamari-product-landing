import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, 'First name is required'),

    lastName: z
      .string()
      .trim()
      .min(1, 'Last name is required'),

    email: z
      .email('Invalid email address'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters'),
      role: z.enum(
        ["student", "teacher", "parent"],
        {
          error: "Please select a role",
        }
      ),
    repeatPassword: z
      .string()
      .min(1, 'Please confirm your password'),
      acceptTerms: z.boolean().refine((value) => value === true, {
        message: "You must accept the terms and conditions",
      }),
  })
  .refine(
    (data) => data.password === data.repeatPassword,
    {
      message: 'Passwords do not match',
      path: ['repeatPassword'],
    }
  );

export type RegisterFormData = z.infer<
  typeof registerSchema
>;