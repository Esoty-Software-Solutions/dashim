/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateManyEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateManyEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateManyEntryRecordInputEnvelope>;
export const BeneficiaryServiceCreateManyEntryRecordInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryServiceCreateManyEntryRecordInputObjectSchema),
            z.lazy(() => BeneficiaryServiceCreateManyEntryRecordInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
