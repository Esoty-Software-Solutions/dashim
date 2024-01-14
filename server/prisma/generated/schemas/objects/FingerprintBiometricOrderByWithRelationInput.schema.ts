import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FingerTypeOrderByWithRelationInputObjectSchema } from './FingerTypeOrderByWithRelationInput.schema';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from './BeneficiaryOrderByWithRelationInput.schema';
import { EntryRecordOrderByRelationAggregateInputObjectSchema } from './EntryRecordOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricOrderByWithRelationInput> = z
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
    fingerType: z
      .lazy(() => FingerTypeOrderByWithRelationInputObjectSchema)
      .optional(),
    beneficiary: z
      .lazy(() => BeneficiaryOrderByWithRelationInputObjectSchema)
      .optional(),
    entryRecords: z
      .lazy(() => EntryRecordOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FingerprintBiometricOrderByWithRelationInputObjectSchema = Schema;
