/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceRelationFilter>;
export const MedicalServiceRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
