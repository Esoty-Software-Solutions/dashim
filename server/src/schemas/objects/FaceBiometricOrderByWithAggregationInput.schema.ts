import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FaceBiometricCountOrderByAggregateInputObjectSchema } from './FaceBiometricCountOrderByAggregateInput.schema';
import { FaceBiometricMaxOrderByAggregateInputObjectSchema } from './FaceBiometricMaxOrderByAggregateInput.schema';
import { FaceBiometricMinOrderByAggregateInputObjectSchema } from './FaceBiometricMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricOrderByWithAggregationInput> = z
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
    hash: z.lazy(() => SortOrderSchema).optional(),
    beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FaceBiometricCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => FaceBiometricMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => FaceBiometricMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FaceBiometricOrderByWithAggregationInputObjectSchema = Schema;
