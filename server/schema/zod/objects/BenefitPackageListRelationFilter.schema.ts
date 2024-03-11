/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageListRelationFilter>;
export const BenefitPackageListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
        some: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
        none: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
