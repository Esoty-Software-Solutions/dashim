/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterRelationFilter>;
export const MedicalCenterRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
