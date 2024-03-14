/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterNullableRelationFilter>;
export const MedicalCenterNullableRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z
            .union([z.lazy(() => MedicalCenterWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        isNot: z
            .union([z.lazy(() => MedicalCenterWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
    })
    .strict() as SchemaType;
