/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryInputSchema } from '../input/BenefitPackageMedicalServiceCategoryInput.schema';
import { MedicalServiceInputSchema } from '../input/MedicalServiceInput.schema';
import { MedicalServiceCategoryCountOutputTypeArgsObjectSchema } from './MedicalServiceCategoryCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryInclude>;
export const MedicalServiceCategoryIncludeObjectSchema: SchemaType = z
    .object({
        beneftiPackages: z
            .union([z.boolean(), z.lazy(() => BenefitPackageMedicalServiceCategoryInputSchema.findMany)])
            .optional(),
        services: z.union([z.boolean(), z.lazy(() => MedicalServiceInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => MedicalServiceCategoryCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
