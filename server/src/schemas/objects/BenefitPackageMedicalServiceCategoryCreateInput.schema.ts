import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInput.schema';
import { MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateInput> =
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
      benefitPackage: z.lazy(
        () =>
          BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInputObjectSchema,
      ),
      medicalServiceCategory: z.lazy(
        () =>
          MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInputObjectSchema,
      ),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryCreateInputObjectSchema =
  Schema;
