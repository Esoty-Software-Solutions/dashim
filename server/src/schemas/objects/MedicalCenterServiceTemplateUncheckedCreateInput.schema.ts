import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutMedicalCenterServiceTemplateInput.schema';
import { MedicalCenterServiceUncheckedCreateNestedManyWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUncheckedCreateNestedManyWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateUncheckedCreateInput> =
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
      services: z
        .lazy(
          () =>
            MedicalCenterServiceUncheckedCreateNestedManyWithoutTemplateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema =
  Schema;
