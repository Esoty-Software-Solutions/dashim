/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCreateManyCategoryInputObjectSchema } from './MedicalServiceCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateManyCategoryInputEnvelope>;
export const MedicalServiceCreateManyCategoryInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => MedicalServiceCreateManyCategoryInputObjectSchema),
            z.lazy(() => MedicalServiceCreateManyCategoryInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
