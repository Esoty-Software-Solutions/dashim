/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateManyGenderInputObjectSchema } from './BeneficiaryCreateManyGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateManyGenderInputEnvelope>;
export const BeneficiaryCreateManyGenderInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryCreateManyGenderInputObjectSchema),
            z.lazy(() => BeneficiaryCreateManyGenderInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
