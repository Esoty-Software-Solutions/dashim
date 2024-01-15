import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceAvgOrderByAggregateInput> =
  z
    .object({
      basePrice: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceAvgOrderByAggregateInputObjectSchema =
  Schema;
