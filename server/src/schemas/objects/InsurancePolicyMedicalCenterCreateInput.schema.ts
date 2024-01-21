import { z } from 'zod';
import { InsurancePolicyCreateNestedOneWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutMedicalCentersInput.schema';
import { MedicalCenterCreateNestedOneWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    insurancePolicy: z.lazy(
      () =>
        InsurancePolicyCreateNestedOneWithoutMedicalCentersInputObjectSchema,
    ),
    medicalCenter: z.lazy(
      () => MedicalCenterCreateNestedOneWithoutInsurancePolicyInputObjectSchema,
    ),
  })
  .strict();

export const InsurancePolicyMedicalCenterCreateInputObjectSchema = Schema;
