import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageSumOrderByAggregateInput> = z
  .object({
    limit: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BenefitPackageSumOrderByAggregateInputObjectSchema = Schema;
