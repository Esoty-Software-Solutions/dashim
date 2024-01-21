import { z } from 'zod';
import { MedicalServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateCreateNestedOneWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInput> =
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
      medicalServiceTemplate: z.lazy(
        () =>
          MedicalServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema,
      ),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInputObjectSchema =
  Schema;
