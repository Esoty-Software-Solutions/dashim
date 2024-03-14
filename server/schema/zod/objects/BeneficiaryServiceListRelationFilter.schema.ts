/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceListRelationFilter>;
export const BeneficiaryServiceListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).optional(),
        some: z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).optional(),
        none: z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
