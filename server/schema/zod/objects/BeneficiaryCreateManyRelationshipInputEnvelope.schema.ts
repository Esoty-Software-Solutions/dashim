/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateManyRelationshipInputObjectSchema } from './BeneficiaryCreateManyRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateManyRelationshipInputEnvelope>;
export const BeneficiaryCreateManyRelationshipInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => BeneficiaryCreateManyRelationshipInputObjectSchema),
            z.lazy(() => BeneficiaryCreateManyRelationshipInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
