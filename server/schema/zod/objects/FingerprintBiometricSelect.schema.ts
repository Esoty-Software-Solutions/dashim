/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumArgsObjectSchema } from './FingerTypeEnumArgs.schema';
import { BeneficiaryArgsObjectSchema } from './BeneficiaryArgs.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { FingerprintBiometricCountOutputTypeArgsObjectSchema } from './FingerprintBiometricCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricSelect>;
export const FingerprintBiometricSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        fingerType: z.union([z.boolean(), z.lazy(() => FingerTypeEnumArgsObjectSchema)]).optional(),
        fingerTypeId: z.boolean().optional(),
        record: z.boolean().optional(),
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        beneficiaryId: z.boolean().optional(),
        entryRecords: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => FingerprintBiometricCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
