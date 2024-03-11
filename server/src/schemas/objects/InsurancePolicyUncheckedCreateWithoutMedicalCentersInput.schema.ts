import { z } from 'zod';
import { BeneficiaryEntityUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';

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
      deactivationDate: z.coerce.date().optional().nullable(),
      name: z.string(),
      Accumulatedlimit: z.number(),
      BalanceResetDate: z.coerce.date(),
      issueDate: z.coerce.date(),
      renewalDate: z.coerce.date(),
      serviceEntryTimeWindow: z.number().optional(),
      institutionId: z.string(),
      beneficiaryEntities: z
        .lazy(
          () =>
            BeneficiaryEntityUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
      benefitPackages: z
        .lazy(
          () =>
            BenefitPackageUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema =
  Schema;
