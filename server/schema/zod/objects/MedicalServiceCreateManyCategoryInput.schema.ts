/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateManyCategoryInput>;
export const MedicalServiceCreateManyCategoryInputObjectSchema: SchemaType = z
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
        name: z.string(),
        medicalCenterCode: z.string(),
        basePrice: z.number(),
        medicalCenterId: z.string(),
    })
    .strict() as SchemaType;
