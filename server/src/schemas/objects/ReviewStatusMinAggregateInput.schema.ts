import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusMinAggregateInputType> = z
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
  .strict();

export const ReviewStatusMinAggregateInputObjectSchema = Schema;
