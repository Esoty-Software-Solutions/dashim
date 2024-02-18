import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateWithoutBeneftiPackageInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      balancePending: z.number(),
      balanceActual: z.number(),
      beneficiary: z.lazy(
        () =>
          BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema,
      ),
    })
    .strict();

export const BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema =
  Schema;
