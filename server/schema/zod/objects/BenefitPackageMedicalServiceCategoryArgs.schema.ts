/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategorySelectObjectSchema } from './BenefitPackageMedicalServiceCategorySelect.schema';
import { BenefitPackageMedicalServiceCategoryIncludeObjectSchema } from './BenefitPackageMedicalServiceCategoryInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryArgs>;
export const BenefitPackageMedicalServiceCategoryArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => BenefitPackageMedicalServiceCategorySelectObjectSchema).optional(),
        include: z.lazy(() => BenefitPackageMedicalServiceCategoryIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
