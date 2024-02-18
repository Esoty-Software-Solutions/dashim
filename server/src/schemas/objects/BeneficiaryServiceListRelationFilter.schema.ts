import { z } from 'zod';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceListRelationFilter> = z
  .object({
    every: z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).optional(),
    some: z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).optional(),
    none: z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).optional(),
  })
  .strict();

export const BeneficiaryServiceListRelationFilterObjectSchema = Schema;
