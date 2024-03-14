/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInput>;
export const InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInputObjectSchema: SchemaType = z
    .object({
        insurancePolicyId: z.string(),
        medicalCenterId: z.string(),
    })
    .strict() as SchemaType;
