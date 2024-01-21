import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    createdById: z.string(),
    updatedById: z.string().optional().nullable(),
    changeDate: z.coerce.date(),
    futureStatus: z.boolean(),
    description: z.string().optional().nullable(),
    beneficiaryId: z.string(),
  })
  .strict();

export const BeneficiaryFutureStatusChangeCreateManyInputObjectSchema = Schema;
