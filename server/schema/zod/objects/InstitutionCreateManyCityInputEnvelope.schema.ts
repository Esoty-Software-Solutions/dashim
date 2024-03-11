/* eslint-disable */
import { z } from 'zod';
import { InstitutionCreateManyCityInputObjectSchema } from './InstitutionCreateManyCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionCreateManyCityInputEnvelope>;
export const InstitutionCreateManyCityInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => InstitutionCreateManyCityInputObjectSchema),
            z.lazy(() => InstitutionCreateManyCityInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
