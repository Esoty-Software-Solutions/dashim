/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageMedicalServiceCategoryOrderByRelationAggregateInputObjectSchema } from './BenefitPackageMedicalServiceCategoryOrderByRelationAggregateInput.schema';
import { MedicalServiceOrderByRelationAggregateInputObjectSchema } from './MedicalServiceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryOrderByWithRelationInput>;
export const MedicalServiceCategoryOrderByWithRelationInputObjectSchema: SchemaType = z
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
        name: z.lazy(() => SortOrderSchema).optional(),
        dalilCode: z.lazy(() => SortOrderSchema).optional(),
        basePrice: z.lazy(() => SortOrderSchema).optional(),
        IsPriceVaried: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        beneftiPackages: z
            .lazy(() => BenefitPackageMedicalServiceCategoryOrderByRelationAggregateInputObjectSchema)
            .optional(),
        services: z.lazy(() => MedicalServiceOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
