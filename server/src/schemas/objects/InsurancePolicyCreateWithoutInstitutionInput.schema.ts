import { z } from 'zod';
import { BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateNestedManyWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateWithoutInstitutionInput> = z
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
    beneficiaryEntities: z
      .lazy(
        () =>
          BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
    benefitPackages: z
      .lazy(
        () =>
          BenefitPackageCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
    medicalCenters: z
      .lazy(
        () =>
          InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InsurancePolicyCreateWithoutInstitutionInputObjectSchema = Schema;
