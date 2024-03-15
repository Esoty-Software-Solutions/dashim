/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterListRelationFilter>;
export const MedicalCenterListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
        some: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
        none: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
