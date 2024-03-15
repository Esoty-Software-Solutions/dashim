/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceCreateManyInstitutionInputObjectSchema } from './InstitutionMedicalServiceCreateManyInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceCreateManyInstitutionInputEnvelope>;
export const InstitutionMedicalServiceCreateManyInstitutionInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => InstitutionMedicalServiceCreateManyInstitutionInputObjectSchema),
            z.lazy(() => InstitutionMedicalServiceCreateManyInstitutionInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
