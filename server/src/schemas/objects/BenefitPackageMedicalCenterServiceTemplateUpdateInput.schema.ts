import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BenefitPackageUpdateOneRequiredWithoutMedicalServiceTemplatesNestedInputObjectSchema } from './BenefitPackageUpdateOneRequiredWithoutMedicalServiceTemplatesNestedInput.schema';
import { MedicalCenterServiceTemplateUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema } from './MedicalCenterServiceTemplateUpdateOneRequiredWithoutBeneftiPackagesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPublished: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isSoftDeleted: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deactivationReason: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      benefitPackage: z
        .lazy(
          () =>
            BenefitPackageUpdateOneRequiredWithoutMedicalServiceTemplatesNestedInputObjectSchema,
        )
        .optional(),
      medicalCenterServiceTemplate: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateUpdateInputObjectSchema =
  Schema;
