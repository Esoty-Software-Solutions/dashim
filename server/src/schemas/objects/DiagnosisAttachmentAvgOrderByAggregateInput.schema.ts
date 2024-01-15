import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiagnosisAttachmentAvgOrderByAggregateInput> = z
  .object({
    size: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DiagnosisAttachmentAvgOrderByAggregateInputObjectSchema = Schema;