/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterArgsObjectSchema } from './MedicalCenterArgs.schema';
import { BeneficiaryServiceInputSchema } from '../input/BeneficiaryServiceInput.schema';
import { InstitutionMedicalServiceInputSchema } from '../input/InstitutionMedicalServiceInput.schema';
import { MedicalServiceCategoryArgsObjectSchema } from './MedicalServiceCategoryArgs.schema';
import { MedicalServiceCountOutputTypeArgsObjectSchema } from './MedicalServiceCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceInclude>;
export const MedicalServiceIncludeObjectSchema: SchemaType = z
    .object({
        medicalCenter: z.union([z.boolean(), z.lazy(() => MedicalCenterArgsObjectSchema)]).optional(),
        beneficiaryServices: z.union([z.boolean(), z.lazy(() => BeneficiaryServiceInputSchema.findMany)]).optional(),
        institutionPricing: z
            .union([z.boolean(), z.lazy(() => InstitutionMedicalServiceInputSchema.findMany)])
            .optional(),
        category: z.union([z.boolean(), z.lazy(() => MedicalServiceCategoryArgsObjectSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => MedicalServiceCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
