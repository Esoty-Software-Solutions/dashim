/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateManyFingerprintBiometricInputObjectSchema } from './EntryRecordCreateManyFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateManyFingerprintBiometricInputEnvelope>;
export const EntryRecordCreateManyFingerprintBiometricInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => EntryRecordCreateManyFingerprintBiometricInputObjectSchema),
            z.lazy(() => EntryRecordCreateManyFingerprintBiometricInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
