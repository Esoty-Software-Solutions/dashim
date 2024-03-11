/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateManyBeneficiaryInputObjectSchema } from './EntryRecordCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordCreateManyBeneficiaryInputEnvelope>;
export const EntryRecordCreateManyBeneficiaryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => EntryRecordCreateManyBeneficiaryInputObjectSchema),
            z.lazy(() => EntryRecordCreateManyBeneficiaryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
