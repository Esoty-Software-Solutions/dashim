/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumArgsObjectSchema } from './FingerTypeEnumArgs.schema';
import { BeneficiaryArgsObjectSchema } from './BeneficiaryArgs.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { FingerprintBiometricCountOutputTypeArgsObjectSchema } from './FingerprintBiometricCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricInclude>;
export const FingerprintBiometricIncludeObjectSchema: SchemaType = z
    .object({
        fingerType: z.union([z.boolean(), z.lazy(() => FingerTypeEnumArgsObjectSchema)]).optional(),
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        entryRecords: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => FingerprintBiometricCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
