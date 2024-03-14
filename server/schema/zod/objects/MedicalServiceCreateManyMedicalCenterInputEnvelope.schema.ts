/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCreateManyMedicalCenterInputObjectSchema } from './MedicalServiceCreateManyMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateManyMedicalCenterInputEnvelope>;
export const MedicalServiceCreateManyMedicalCenterInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => MedicalServiceCreateManyMedicalCenterInputObjectSchema),
            z.lazy(() => MedicalServiceCreateManyMedicalCenterInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
