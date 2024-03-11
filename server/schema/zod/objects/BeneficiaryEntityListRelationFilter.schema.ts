/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityListRelationFilter>;
export const BeneficiaryEntityListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
        some: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
        none: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
