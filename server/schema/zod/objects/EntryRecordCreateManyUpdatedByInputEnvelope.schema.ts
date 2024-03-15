/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateManyUpdatedByInputObjectSchema } from './EntryRecordCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateManyUpdatedByInputEnvelope>;
export const EntryRecordCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => EntryRecordCreateManyUpdatedByInputObjectSchema),
            z.lazy(() => EntryRecordCreateManyUpdatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
