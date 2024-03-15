/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateManyVoiceBiometricInputObjectSchema } from './EntryRecordCreateManyVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateManyVoiceBiometricInputEnvelope>;
export const EntryRecordCreateManyVoiceBiometricInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => EntryRecordCreateManyVoiceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordCreateManyVoiceBiometricInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
