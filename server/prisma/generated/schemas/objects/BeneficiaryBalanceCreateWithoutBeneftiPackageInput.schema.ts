import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutSpentsInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateWithoutBeneftiPackageInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      balance: z.number(),
      beneficiary: z.lazy(
        () => BeneficiaryCreateNestedOneWithoutSpentsInputObjectSchema,
      ),
    })
    .strict();

export const BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema =
  Schema;
