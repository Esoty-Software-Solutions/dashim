/* eslint-disable */
import { z } from 'zod';
import { InstitutionMedicalServiceWhereInputObjectSchema } from './InstitutionMedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceListRelationFilter>;
export const InstitutionMedicalServiceListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema).optional(),
        some: z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema).optional(),
        none: z.lazy(() => InstitutionMedicalServiceWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
