import { z } from 'zod';
import { SubscriberUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';
import { PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './PackageMedicalServicesUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUncheckedCreateWithoutMedicalCentersInput> =
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
      coPay: z.number(),
      limit: z.number(),
      institutionId: z.string(),
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
    })
    .strict();

export const InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema =
  Schema;