import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateWithoutBeneficiaryInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      balance: z.number(),
      beneftiPackage: z.lazy(
        () =>
          BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema,
      ),
    })
    .strict();

export const BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema =
  Schema;
