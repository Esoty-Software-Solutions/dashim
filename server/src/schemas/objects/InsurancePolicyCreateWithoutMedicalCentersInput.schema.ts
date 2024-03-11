import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema } from './InstitutionCreateNestedOneWithoutPoliciesInput.schema';
import { BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateWithoutMedicalCentersInput> =
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
      institution: z.lazy(
        () => InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema,
      ),
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
    })
    .strict();

export const InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema =
  Schema;
