/* eslint-disable */
import { z } from 'zod';
import { InsurancePolicyArgsObjectSchema } from './InsurancePolicyArgs.schema';
import { MedicalCenterArgsObjectSchema } from './MedicalCenterArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterInclude>;
export const InsurancePolicyMedicalCenterIncludeObjectSchema: SchemaType = z
    .object({
        insurancePolicy: z.union([z.boolean(), z.lazy(() => InsurancePolicyArgsObjectSchema)]).optional(),
        medicalCenter: z.union([z.boolean(), z.lazy(() => MedicalCenterArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
