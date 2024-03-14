/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyRelationFilter>;
export const InsurancePolicyRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
