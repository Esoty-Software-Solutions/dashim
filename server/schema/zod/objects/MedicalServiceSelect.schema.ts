/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterArgsObjectSchema } from './MedicalCenterArgs.schema';
import { BeneficiaryServiceInputSchema } from '../input/BeneficiaryServiceInput.schema';
import { InstitutionMedicalServiceInputSchema } from '../input/InstitutionMedicalServiceInput.schema';
import { MedicalServiceCategoryArgsObjectSchema } from './MedicalServiceCategoryArgs.schema';
import { MedicalServiceCountOutputTypeArgsObjectSchema } from './MedicalServiceCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceSelect>;
export const MedicalServiceSelectObjectSchema: SchemaType = z
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
        medicalCenterCode: z.boolean().optional(),
        basePrice: z.boolean().optional(),
        medicalCenter: z.union([z.boolean(), z.lazy(() => MedicalCenterArgsObjectSchema)]).optional(),
        medicalCenterId: z.boolean().optional(),
        beneficiaryServices: z.union([z.boolean(), z.lazy(() => BeneficiaryServiceInputSchema.findMany)]).optional(),
        institutionPricing: z
            .union([z.boolean(), z.lazy(() => InstitutionMedicalServiceInputSchema.findMany)])
            .optional(),
        category: z.union([z.boolean(), z.lazy(() => MedicalServiceCategoryArgsObjectSchema)]).optional(),
        categoryId: z.boolean().optional(),
        _count: z.union([z.boolean(), z.lazy(() => MedicalServiceCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
