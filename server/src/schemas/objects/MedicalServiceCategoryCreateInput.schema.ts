import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutMedicalServiceCategoryInput.schema';
import { MedicalServiceCreateNestedManyWithoutCategoryInputObjectSchema } from './MedicalServiceCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryCreateInput> = z
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
    dalilCode: z.string(),
    basePrice: z.string(),
    IsPriceVaried: z.boolean().optional(),
    description: z.string(),
    beneftiPackages: z
      .lazy(
        () =>
          BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutMedicalServiceCategoryInputObjectSchema,
      )
      .optional(),
    services: z
      .lazy(
        () => MedicalServiceCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalServiceCategoryCreateInputObjectSchema = Schema;
