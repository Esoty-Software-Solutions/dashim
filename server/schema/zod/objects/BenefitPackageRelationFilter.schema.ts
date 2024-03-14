/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageRelationFilter>;
export const BenefitPackageRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
