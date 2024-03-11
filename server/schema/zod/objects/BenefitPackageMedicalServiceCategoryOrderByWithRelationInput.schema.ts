/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './BenefitPackageOrderByWithRelationInput.schema';
import { MedicalServiceCategoryOrderByWithRelationInputObjectSchema } from './MedicalServiceCategoryOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryOrderByWithRelationInput>;
export const BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z
            .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
            .optional(),
        deactivationDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        benefitPackageId: z.lazy(() => SortOrderSchema).optional(),
        medicalServiceCategoryId: z.lazy(() => SortOrderSchema).optional(),
        benefitPackage: z.lazy(() => BenefitPackageOrderByWithRelationInputObjectSchema).optional(),
        medicalServiceCategory: z.lazy(() => MedicalServiceCategoryOrderByWithRelationInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
