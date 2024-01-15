import { z } from 'zod';
import { BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInputObjectSchema } from './BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    beneficiaryId_beneftiPackageId: z
      .lazy(
        () =>
          BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryBalanceWhereUniqueInputObjectSchema = Schema;
