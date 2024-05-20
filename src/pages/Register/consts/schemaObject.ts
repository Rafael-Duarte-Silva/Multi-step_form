import { z } from 'zod';

export const schemaObject = (currentStep?: number) => {
    return z.object(
        {
            name: z.string()
            .min(1, 'This field is required')
            .min(6, 'Min 6 characters')
            .max(18, 'Max 18 characters')
            .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'Must contain only letters'),

            email: z.string()
            .min(1, 'This field is required')
            .email({ message: "Invalid email address" }),

            phoneNumber: z.string()
            .min(1, 'This field is required')
            .min(14, 'Min 14 characters')
            .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, 'Invalid Phone Number'),

            yearlyPlan: z.boolean()
            .default(false),

            plan: z.string()
            .refine(v => currentStep === 1 && v === 'none' ? undefined : v),

            onlineService: z.boolean()
            .default(false),

            largerStorage: z.boolean()
            .default(false),

            customizableProfile: z.boolean()
            .default(false)
        }
    );
}