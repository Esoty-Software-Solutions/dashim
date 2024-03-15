/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusMinAggregateInputType>;
export const ReviewStatusMinAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        createdAt: z.literal(true).optional(),
        updatedAt: z.literal(true).optional(),
        isPublished: z.literal(true).optional(),
        isSoftDeleted: z.literal(true).optional(),
        createdById: z.literal(true).optional(),
        updatedById: z.literal(true).optional(),
        transactionReviewStatusId: z.literal(true).optional(),
        medicalReviewStatusId: z.literal(true).optional(),
    })
    .strict() as SchemaType;
