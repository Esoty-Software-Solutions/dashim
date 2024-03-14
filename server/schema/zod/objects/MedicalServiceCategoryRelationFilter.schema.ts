/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryRelationFilter>;
export const MedicalServiceCategoryRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
