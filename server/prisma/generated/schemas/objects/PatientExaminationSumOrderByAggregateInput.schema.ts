import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationSumOrderByAggregateInput> = z
  .object({
    cash: z.lazy(() => SortOrderSchema).optional(),
    limit: z.lazy(() => SortOrderSchema).optional(),
    deffered: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PatientExaminationSumOrderByAggregateInputObjectSchema = Schema;
