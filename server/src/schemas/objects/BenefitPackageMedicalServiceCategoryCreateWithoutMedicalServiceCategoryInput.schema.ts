import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInput> =
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
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema =
  Schema;
