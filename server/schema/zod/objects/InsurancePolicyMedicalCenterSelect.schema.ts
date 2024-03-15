/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyArgsObjectSchema } from './InsurancePolicyArgs.schema';
import { MedicalCenterArgsObjectSchema } from './MedicalCenterArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterSelect>;
export const InsurancePolicyMedicalCenterSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        insurancePolicyId: z.boolean().optional(),
        insurancePolicy: z.union([z.boolean(), z.lazy(() => InsurancePolicyArgsObjectSchema)]).optional(),
        medicalCenterId: z.boolean().optional(),
        medicalCenter: z.union([z.boolean(), z.lazy(() => MedicalCenterArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
