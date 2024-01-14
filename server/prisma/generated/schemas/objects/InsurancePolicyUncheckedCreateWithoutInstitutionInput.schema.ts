import { z } from 'zod';
import { SubscriberUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUncheckedCreateWithoutInstitutionInput> =
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
      serviceEntryTimeWindow: z.number().optional(),
      subscribers: z
        .lazy(
          () =>
            SubscriberUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
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

export const InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema =
  Schema;
