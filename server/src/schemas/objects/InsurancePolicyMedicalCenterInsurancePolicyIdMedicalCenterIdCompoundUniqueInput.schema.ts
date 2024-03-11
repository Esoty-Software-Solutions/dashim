import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInput> =
  z
    .object({
      insurancePolicyId: z.string(),
      medicalCenterId: z.string(),
    })
    .strict();

export const InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInputObjectSchema =
  Schema;
