import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardBeneficiaryIdIdCompoundUniqueInput> = z
  .object({
    beneficiaryId: z.string(),
    id: z.string(),
  })
  .strict();

export const IDCardBeneficiaryIdIdCompoundUniqueInputObjectSchema = Schema;
