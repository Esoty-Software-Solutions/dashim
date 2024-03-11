/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInput>;
export const BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        createdById: z.string(),
        updatedById: z.union([z.string(), z.null()]).optional().nullable(),
        changeDate: z.union([z.date(), z.string().datetime()]),
        futureStatus: z.boolean(),
        description: z.union([z.string(), z.null()]).optional().nullable(),
    })
    .strict() as SchemaType;
