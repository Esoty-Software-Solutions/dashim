/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from './BeneficiaryOrderByWithRelationInput.schema';
import { EntryRecordOrderByRelationAggregateInputObjectSchema } from './EntryRecordOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricOrderByWithRelationInput>;
export const VoiceBiometricOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z
            .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
            .optional(),
        deactivationDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        record: z.lazy(() => SortOrderSchema).optional(),
        beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
        beneficiary: z.lazy(() => BeneficiaryOrderByWithRelationInputObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
