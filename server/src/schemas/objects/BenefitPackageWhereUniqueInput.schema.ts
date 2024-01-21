import { z } from 'zod';
import { BenefitPackageInsurancePolicyIdNameCompoundUniqueInputObjectSchema } from './BenefitPackageInsurancePolicyIdNameCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    insurancePolicyId_name: z
      .lazy(
        () =>
          BenefitPackageInsurancePolicyIdNameCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BenefitPackageWhereUniqueInputObjectSchema = Schema;
