import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FingerprintBiometricCountOrderByAggregateInputObjectSchema } from './FingerprintBiometricCountOrderByAggregateInput.schema';
import { FingerprintBiometricMaxOrderByAggregateInputObjectSchema } from './FingerprintBiometricMaxOrderByAggregateInput.schema';
import { FingerprintBiometricMinOrderByAggregateInputObjectSchema } from './FingerprintBiometricMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricOrderByWithAggregationInput> =
  z
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
      fingerTypeId: z.lazy(() => SortOrderSchema).optional(),
      hash: z.lazy(() => SortOrderSchema).optional(),
      beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => FingerprintBiometricCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => FingerprintBiometricMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => FingerprintBiometricMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const FingerprintBiometricOrderByWithAggregationInputObjectSchema =
  Schema;
