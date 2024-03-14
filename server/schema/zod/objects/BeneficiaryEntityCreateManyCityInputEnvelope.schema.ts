/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateManyCityInputObjectSchema } from './BeneficiaryEntityCreateManyCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateManyCityInputEnvelope>;
export const BeneficiaryEntityCreateManyCityInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryEntityCreateManyCityInputObjectSchema),
            z.lazy(() => BeneficiaryEntityCreateManyCityInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
