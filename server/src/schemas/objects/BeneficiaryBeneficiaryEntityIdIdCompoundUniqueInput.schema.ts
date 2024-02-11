import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInput> =
  z
    .object({
      beneficiaryEntityId: z.string(),
      id: z.string(),
    })
    .strict();

export const BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInputObjectSchema =
  Schema;
