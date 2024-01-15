import { z } from 'zod';
import { BenefitPackageCreatecopayDistrubtionInputObjectSchema } from './BenefitPackageCreatecopayDistrubtionInput.schema';
import { BenefitPackageCreatethreasholdInputObjectSchema } from './BenefitPackageCreatethreasholdInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateNestedManyWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateNestedManyWithoutBenefitPackageInput.schema';
import { BeneficiaryBalanceCreateNestedManyWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceCreateNestedManyWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateWithoutInsurancePolicyInput> =
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
      copayDistrubtion: z
        .union([
          z.lazy(() => BenefitPackageCreatecopayDistrubtionInputObjectSchema),
          z.number().array(),
        ])
        .optional(),
      threashold: z
        .union([
          z.lazy(() => BenefitPackageCreatethreasholdInputObjectSchema),
          z.number().array(),
        ])
        .optional(),
      medicalServiceTemplates: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCreateNestedManyWithoutBenefitPackageInputObjectSchema,
        )
        .optional(),
      beneficiaryBalances: z
        .lazy(
          () =>
            BeneficiaryBalanceCreateNestedManyWithoutBeneftiPackageInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema =
  Schema;
