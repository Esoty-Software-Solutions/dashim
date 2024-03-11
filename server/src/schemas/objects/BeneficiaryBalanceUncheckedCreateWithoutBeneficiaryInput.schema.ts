import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      beneftiPackageId: z.string(),
      balancePending: z.number(),
      balanceActual: z.number(),
    })
    .strict();

export const BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema =
  Schema;
