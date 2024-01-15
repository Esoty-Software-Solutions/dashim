import { z } from 'zod';
import { SubscriberUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUncheckedCreateWithoutBenefitPackagesInput> =
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
      Accumulatedlimit: z.number(),
      BalanceResetDate: z.coerce.date(),
      institutionId: z.string(),
      issueDate: z.coerce.date(),
      renewalDate: z.coerce.date(),
      serviceEntryTimeWindow: z.number().optional(),
      subscribers: z
        .lazy(
          () =>
            SubscriberUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
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

export const InsurancePolicyUncheckedCreateWithoutBenefitPackagesInputObjectSchema =
  Schema;
