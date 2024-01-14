import { z } from 'zod';
import { PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUncheckedCreateWithoutSubscribersInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      name: z.string(),
      limit: z.number(),
      institutionId: z.string(),
      serviceEntryTimeWindow: z.number().optional(),
      packageMedicalServices: z
        .lazy(
          () =>
            PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
      medicalCenters: z
        .lazy(
          () =>
            InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema =
  Schema;
