/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './MedicalCenterOrderByWithRelationInput.schema';
import { BeneficiaryServiceOrderByRelationAggregateInputObjectSchema } from './BeneficiaryServiceOrderByRelationAggregateInput.schema';
import { InstitutionMedicalServiceOrderByRelationAggregateInputObjectSchema } from './InstitutionMedicalServiceOrderByRelationAggregateInput.schema';
import { MedicalServiceCategoryOrderByWithRelationInputObjectSchema } from './MedicalServiceCategoryOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceOrderByWithRelationInput>;
export const MedicalServiceOrderByWithRelationInputObjectSchema: SchemaType = z
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
        medicalCenterCode: z.lazy(() => SortOrderSchema).optional(),
        basePrice: z.lazy(() => SortOrderSchema).optional(),
        medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
        categoryId: z.lazy(() => SortOrderSchema).optional(),
        medicalCenter: z.lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema).optional(),
        beneficiaryServices: z.lazy(() => BeneficiaryServiceOrderByRelationAggregateInputObjectSchema).optional(),
        institutionPricing: z.lazy(() => InstitutionMedicalServiceOrderByRelationAggregateInputObjectSchema).optional(),
        category: z.lazy(() => MedicalServiceCategoryOrderByWithRelationInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
