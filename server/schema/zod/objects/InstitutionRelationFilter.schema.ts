/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionRelationFilter>;
export const InstitutionRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
