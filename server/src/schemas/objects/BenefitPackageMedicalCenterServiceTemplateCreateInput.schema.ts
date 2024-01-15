import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutMedicalServiceTemplatesInput.schema';
import { MedicalCenterServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateCreateNestedOneWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateCreateInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      benefitPackage: z.lazy(
        () =>
          BenefitPackageCreateNestedOneWithoutMedicalServiceTemplatesInputObjectSchema,
      ),
      medicalCenterServiceTemplate: z.lazy(
        () =>
          MedicalCenterServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema,
      ),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateCreateInputObjectSchema =
  Schema;
