/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityRelationFilter>;
export const BeneficiaryEntityRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
