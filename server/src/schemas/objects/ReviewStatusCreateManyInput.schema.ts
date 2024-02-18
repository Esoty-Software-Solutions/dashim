import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    createdById: z.string(),
    updatedById: z.string().optional().nullable(),
    transactionReviewStatusId: z.string(),
    medicalReviewStatusId: z.string(),
  })
  .strict();

export const ReviewStatusCreateManyInputObjectSchema = Schema;
