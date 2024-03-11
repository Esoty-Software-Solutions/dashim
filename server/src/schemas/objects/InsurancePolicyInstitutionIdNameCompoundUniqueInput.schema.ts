import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyInstitutionIdNameCompoundUniqueInput> =
  z
    .object({
      institutionId: z.string(),
      name: z.string(),
    })
    .strict();

export const InsurancePolicyInstitutionIdNameCompoundUniqueInputObjectSchema =
  Schema;
