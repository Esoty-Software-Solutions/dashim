import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    beneficiaryId: z.literal(true).optional(),
    beneftiPackageId: z.literal(true).optional(),
    balance: z.literal(true).optional(),
  })
  .strict();

export const BeneficiaryBalanceMinAggregateInputObjectSchema = Schema;
