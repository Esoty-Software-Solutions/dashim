/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCountAggregateInputType>;
export const MedicalServiceCountAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        createdAt: z.literal(true).optional(),
        updatedAt: z.literal(true).optional(),
        isPublished: z.literal(true).optional(),
        isSoftDeleted: z.literal(true).optional(),
        isActive: z.literal(true).optional(),
        deactivationReason: z.literal(true).optional(),
        deactivationDate: z.literal(true).optional(),
        name: z.literal(true).optional(),
        medicalCenterCode: z.literal(true).optional(),
        basePrice: z.literal(true).optional(),
        medicalCenterId: z.literal(true).optional(),
        categoryId: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict() as SchemaType;
