/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateManyGenderInput>;
export const UserCreateManyGenderInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        firstName: z.string(),
        secondName: z.union([z.string(), z.null()]).optional().nullable(),
        thirdName: z.union([z.string(), z.null()]).optional().nullable(),
        fourthName: z.union([z.string(), z.null()]).optional().nullable(),
        lastName: z.string(),
        searchName: z.string(),
        birthDate: z.union([z.date(), z.string().datetime()]),
        nationality: z.union([z.string(), z.null()]).optional().nullable(),
        nationalID: z.union([z.string(), z.null()]).optional().nullable(),
        username: z.string(),
        email: z.string(),
        isEmailVerificationActive: z.boolean().optional(),
        phone: z.union([z.string(), z.null()]).optional().nullable(),
        isPhoneVerified: z.boolean().optional(),
        passwordHash: z.string(),
        avatar: z.union([z.string(), z.null()]).optional().nullable(),
    })
    .strict() as SchemaType;
