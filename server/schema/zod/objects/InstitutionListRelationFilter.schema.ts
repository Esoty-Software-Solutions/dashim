/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionListRelationFilter>;
export const InstitutionListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
        some: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
        none: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
