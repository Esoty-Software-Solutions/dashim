/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateManyFaceBiometricInputObjectSchema } from './EntryRecordCreateManyFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateManyFaceBiometricInputEnvelope>;
export const EntryRecordCreateManyFaceBiometricInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => EntryRecordCreateManyFaceBiometricInputObjectSchema),
            z.lazy(() => EntryRecordCreateManyFaceBiometricInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
