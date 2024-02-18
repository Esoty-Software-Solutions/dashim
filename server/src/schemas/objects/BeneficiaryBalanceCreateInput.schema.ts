import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateInput> = z
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
    beneftiPackage: z.lazy(
      () =>
        BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema,
    ),
  })
  .strict();

export const BeneficiaryBalanceCreateInputObjectSchema = Schema;
