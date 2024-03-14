/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyListRelationFilter>;
export const InsurancePolicyListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
        some: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
        none: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
