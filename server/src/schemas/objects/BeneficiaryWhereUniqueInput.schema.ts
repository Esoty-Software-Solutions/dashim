import { z } from 'zod';
import { BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInputObjectSchema } from './BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    beneficiaryEntityId_id: z
      .lazy(
        () => BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryWhereUniqueInputObjectSchema = Schema;
