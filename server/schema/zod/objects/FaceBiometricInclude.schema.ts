/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryArgsObjectSchema } from './BeneficiaryArgs.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { FaceBiometricCountOutputTypeArgsObjectSchema } from './FaceBiometricCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricInclude>;
export const FaceBiometricIncludeObjectSchema: SchemaType = z
    .object({
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        entryRecords: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => FaceBiometricCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
