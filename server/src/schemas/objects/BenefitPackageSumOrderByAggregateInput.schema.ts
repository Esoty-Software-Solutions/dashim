import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageSumOrderByAggregateInput> = z
  .object({
    copayDistrubtion: z.lazy(() => SortOrderSchema).optional(),
    threashold: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BenefitPackageSumOrderByAggregateInputObjectSchema = Schema;
