/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceListRelationFilter>;
export const MedicalServiceListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
        some: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
        none: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
