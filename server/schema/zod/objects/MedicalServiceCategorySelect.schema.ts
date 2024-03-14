/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryInputSchema } from '../input/BenefitPackageMedicalServiceCategoryInput.schema';
import { MedicalServiceInputSchema } from '../input/MedicalServiceInput.schema';
import { MedicalServiceCategoryCountOutputTypeArgsObjectSchema } from './MedicalServiceCategoryCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategorySelect>;
export const MedicalServiceCategorySelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        name: z.boolean().optional(),
        dalilCode: z.boolean().optional(),
        basePrice: z.boolean().optional(),
        IsPriceVaried: z.boolean().optional(),
        description: z.boolean().optional(),
        beneftiPackages: z
            .union([z.boolean(), z.lazy(() => BenefitPackageMedicalServiceCategoryInputSchema.findMany)])
            .optional(),
        services: z.union([z.boolean(), z.lazy(() => MedicalServiceInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => MedicalServiceCategoryCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
