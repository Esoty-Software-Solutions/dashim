/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateManyMedicalCenterInputObjectSchema } from './EntryRecordCreateManyMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateManyMedicalCenterInputEnvelope>;
export const EntryRecordCreateManyMedicalCenterInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => EntryRecordCreateManyMedicalCenterInputObjectSchema),
            z.lazy(() => EntryRecordCreateManyMedicalCenterInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
