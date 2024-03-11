/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateManyStatusSetByInput>;
export const BeneficiaryCreateManyStatusSetByInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        firstName: z.string(),
        secondName: z.union([z.string(), z.null()]).optional().nullable(),
        thirdName: z.union([z.string(), z.null()]).optional().nullable(),
        fourthName: z.union([z.string(), z.null()]).optional().nullable(),
        lastName: z.string(),
        searchName: z.string(),
        birthDate: z.union([z.date(), z.string().datetime()]),
        genderId: z.string(),
        nationality: z.union([z.string(), z.null()]).optional().nullable(),
        nationalID: z.union([z.string(), z.null()]).optional().nullable(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        beneficiaryEntityId: z.string(),
        legacyCode: z.union([z.string(), z.null()]).optional().nullable(),
        relationshipId: z.string(),
    })
    .strict() as SchemaType;
