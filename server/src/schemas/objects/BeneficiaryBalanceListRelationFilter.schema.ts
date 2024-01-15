import { z } from 'zod';
import { BeneficiaryBalanceWhereInputObjectSchema } from './BeneficiaryBalanceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceListRelationFilter> = z
  .object({
    every: z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema).optional(),
    some: z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema).optional(),
    none: z.lazy(() => BeneficiaryBalanceWhereInputObjectSchema).optional(),
  })
  .strict();

export const BeneficiaryBalanceListRelationFilterObjectSchema = Schema;
