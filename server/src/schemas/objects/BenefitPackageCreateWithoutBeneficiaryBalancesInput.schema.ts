import { z } from 'zod';
import { BenefitPackageCreatecopayDistrubtionInputObjectSchema } from './BenefitPackageCreatecopayDistrubtionInput.schema';
import { BenefitPackageCreatethreasholdInputObjectSchema } from './BenefitPackageCreatethreasholdInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutBenefitPackageInput.schema';
import { InsurancePolicyCreateNestedOneWithoutBenefitPackagesInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutBenefitPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateWithoutBeneficiaryBalancesInput> =
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
      medicalServiceCategories: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutBenefitPackageInputObjectSchema,
        )
        .optional(),
      insurancePolicy: z.lazy(
        () =>
          InsurancePolicyCreateNestedOneWithoutBenefitPackagesInputObjectSchema,
      ),
    })
    .strict();

export const BenefitPackageCreateWithoutBeneficiaryBalancesInputObjectSchema =
  Schema;
