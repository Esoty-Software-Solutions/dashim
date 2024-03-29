import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    beneficiaryId: z.string(),
    beneftiPackageId: z.string(),
    balancePending: z.number(),
    balanceActual: z.number(),
  })
  .strict();

export const BeneficiaryBalanceCreateManyInputObjectSchema = Schema;
