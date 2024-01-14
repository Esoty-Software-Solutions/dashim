import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      deactivationReason: z.lazy(() => SortOrderSchema).optional(),
      fingerTypeId: z.lazy(() => SortOrderSchema).optional(),
      hash: z.lazy(() => SortOrderSchema).optional(),
      beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const FingerprintBiometricCountOrderByAggregateInputObjectSchema =
  Schema;
