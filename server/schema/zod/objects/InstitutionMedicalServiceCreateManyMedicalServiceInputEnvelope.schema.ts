/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceCreateManyMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateManyMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelope>;
export const InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => InstitutionMedicalServiceCreateManyMedicalServiceInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceCreateManyMedicalServiceInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
