/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryArgsObjectSchema } from './BeneficiaryArgs.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { VoiceBiometricCountOutputTypeArgsObjectSchema } from './VoiceBiometricCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricSelect>;
export const VoiceBiometricSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        record: z.boolean().optional(),
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        beneficiaryId: z.boolean().optional(),
        entryRecords: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => VoiceBiometricCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
