import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInput> =
  z
    .object({
      beneficiaryId: z.string(),
      beneftiPackageId: z.string(),
    })
    .strict();

export const BeneficiaryBalanceBeneficiaryIdBeneftiPackageIdCompoundUniqueInputObjectSchema =
  Schema;
