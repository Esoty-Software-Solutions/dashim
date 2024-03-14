/* eslint-disable */
import { z } from 'zod';
import { IDCardCreateManyBeneficiaryInputObjectSchema } from './IDCardCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardCreateManyBeneficiaryInputEnvelope>;
export const IDCardCreateManyBeneficiaryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => IDCardCreateManyBeneficiaryInputObjectSchema),
            z.lazy(() => IDCardCreateManyBeneficiaryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
