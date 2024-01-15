import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutMedicalCenterServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInput> =
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
      dalilCode: z.string(),
      basePrice: z.string(),
      IsPriceVaried: z.boolean().optional(),
      description: z.string(),
      beneftiPackages: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutMedicalCenterServiceTemplateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema =
  Schema;
