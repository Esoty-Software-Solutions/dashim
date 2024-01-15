import { z } from 'zod';
import { IDCardBeneficiaryIdIdCompoundUniqueInputObjectSchema } from './IDCardBeneficiaryIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    hash: z.string().optional(),
    beneficiaryId_id: z
      .lazy(() => IDCardBeneficiaryIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const IDCardWhereUniqueInputObjectSchema = Schema;
