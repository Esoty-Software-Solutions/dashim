import { z } from 'zod';
import { InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    insurancePolicyId_medicalCenterId: z
      .lazy(
        () =>
          InsurancePolicyMedicalCenterInsurancePolicyIdMedicalCenterIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema = Schema;
