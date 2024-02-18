import { z } from 'zod';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityListRelationFilter> = z
  .object({
    every: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
    some: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
    none: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
  })
  .strict();

export const BeneficiaryEntityListRelationFilterObjectSchema = Schema;
