/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateManyCreatedByInputObjectSchema } from './EntryRecordCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateManyCreatedByInputEnvelope>;
export const EntryRecordCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => EntryRecordCreateManyCreatedByInputObjectSchema),
            z.lazy(() => EntryRecordCreateManyCreatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
