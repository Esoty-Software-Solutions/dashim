import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateCreateNestedManyWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateNestedManyWithoutMedicalServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateCreateWithoutServicesInput> =
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
      dalilCode: z.string(),
      basePrice: z.string(),
      IsPriceVaried: z.boolean().optional(),
      description: z.string(),
      beneftiPackages: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCreateNestedManyWithoutMedicalServiceTemplateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalServiceTemplateCreateWithoutServicesInputObjectSchema =
  Schema;
