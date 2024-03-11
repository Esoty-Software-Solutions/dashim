import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryListRelationFilter> = z
  .object({
    every: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    some: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    none: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
  })
  .strict();

export const BeneficiaryListRelationFilterObjectSchema = Schema;
