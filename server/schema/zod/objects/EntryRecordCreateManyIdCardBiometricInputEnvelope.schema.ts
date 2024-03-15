/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateManyIdCardBiometricInputObjectSchema } from './EntryRecordCreateManyIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateManyIdCardBiometricInputEnvelope>;
export const EntryRecordCreateManyIdCardBiometricInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => EntryRecordCreateManyIdCardBiometricInputObjectSchema),
            z.lazy(() => EntryRecordCreateManyIdCardBiometricInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
