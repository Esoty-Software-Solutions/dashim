import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BeneficiaryEntityFutureStatusChangeCountOrderByAggregateInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCountOrderByAggregateInput.schema';
import { BeneficiaryEntityFutureStatusChangeMaxOrderByAggregateInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeMaxOrderByAggregateInput.schema';
import { BeneficiaryEntityFutureStatusChangeMinOrderByAggregateInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      createdById: z.lazy(() => SortOrderSchema).optional(),
      updatedById: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      changeDate: z.lazy(() => SortOrderSchema).optional(),
      futureStatus: z.lazy(() => SortOrderSchema).optional(),
      description: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      beneficiaryEntityId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () =>
            BeneficiaryEntityFutureStatusChangeMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInputObjectSchema =
  Schema;
