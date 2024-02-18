import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BeneficiaryEntityCountOrderByAggregateInputObjectSchema } from './BeneficiaryEntityCountOrderByAggregateInput.schema';
import { BeneficiaryEntityMaxOrderByAggregateInputObjectSchema } from './BeneficiaryEntityMaxOrderByAggregateInput.schema';
import { BeneficiaryEntityMinOrderByAggregateInputObjectSchema } from './BeneficiaryEntityMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    deactivationDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    statusSetById: z.lazy(() => SortOrderSchema).optional(),
    cityId: z.lazy(() => SortOrderSchema).optional(),
    address: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BeneficiaryEntityCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => BeneficiaryEntityMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BeneficiaryEntityMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficiaryEntityOrderByWithAggregationInputObjectSchema = Schema;
