/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateManyBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateManyBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateManyBeneficiaryEntityInputEnvelope>;
export const BeneficiaryCreateManyBeneficiaryEntityInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryCreateManyBeneficiaryEntityInputObjectSchema),
            z.lazy(() => BeneficiaryCreateManyBeneficiaryEntityInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
