import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageInsurancePolicyIdNameCompoundUniqueInput> =
  z
    .object({
      insurancePolicyId: z.string(),
      name: z.string(),
    })
    .strict();

export const BenefitPackageInsurancePolicyIdNameCompoundUniqueInputObjectSchema =
  Schema;
