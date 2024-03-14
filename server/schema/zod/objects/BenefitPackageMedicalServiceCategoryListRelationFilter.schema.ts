/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryListRelationFilter>;
export const BenefitPackageMedicalServiceCategoryListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema).optional(),
        some: z.lazy(() => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema).optional(),
        none: z.lazy(() => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
