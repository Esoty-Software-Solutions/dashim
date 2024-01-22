import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutMedicalServiceTemplatesInput.schema';
import { MedicalServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateCreateNestedOneWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateCreateInput> =
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
          BenefitPackageCreateNestedOneWithoutMedicalServiceTemplatesInputObjectSchema,
      ),
      medicalServiceTemplate: z.lazy(
        () =>
          MedicalServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema,
      ),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateCreateInputObjectSchema =
  Schema;
