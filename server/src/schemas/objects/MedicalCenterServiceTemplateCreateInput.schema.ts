import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateCreateNestedManyWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateNestedManyWithoutMedicalCenterServiceTemplateInput.schema';
import { MedicalCenterServiceCreateNestedManyWithoutTemplateInputObjectSchema } from './MedicalCenterServiceCreateNestedManyWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    dalilCode: z.string(),
    basePrice: z.string(),
    IsPriceVaried: z.boolean().optional(),
    description: z.string(),
    beneftiPackages: z
      .lazy(
        () =>
          BenefitPackageMedicalCenterServiceTemplateCreateNestedManyWithoutMedicalCenterServiceTemplateInputObjectSchema,
      )
      .optional(),
    services: z
      .lazy(
        () =>
          MedicalCenterServiceCreateNestedManyWithoutTemplateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalCenterServiceTemplateCreateInputObjectSchema = Schema;
