import { z } from 'zod';
import { MedicalCenterServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateCreateNestedOneWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      medicalCenterServiceTemplate: z.lazy(
        () =>
          MedicalCenterServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema,
      ),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInputObjectSchema =
  Schema;
