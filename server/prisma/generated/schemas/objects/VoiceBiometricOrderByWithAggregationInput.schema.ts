import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VoiceBiometricCountOrderByAggregateInputObjectSchema } from './VoiceBiometricCountOrderByAggregateInput.schema';
import { VoiceBiometricMaxOrderByAggregateInputObjectSchema } from './VoiceBiometricMaxOrderByAggregateInput.schema';
import { VoiceBiometricMinOrderByAggregateInputObjectSchema } from './VoiceBiometricMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricOrderByWithAggregationInput> = z
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
    hash: z.lazy(() => SortOrderSchema).optional(),
    beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => VoiceBiometricCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => VoiceBiometricMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => VoiceBiometricMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoiceBiometricOrderByWithAggregationInputObjectSchema = Schema;
