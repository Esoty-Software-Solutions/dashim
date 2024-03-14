/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreateManyCityInputObjectSchema } from './MedicalCenterCreateManyCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateManyCityInputEnvelope>;
export const MedicalCenterCreateManyCityInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => MedicalCenterCreateManyCityInputObjectSchema),
            z.lazy(() => MedicalCenterCreateManyCityInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
