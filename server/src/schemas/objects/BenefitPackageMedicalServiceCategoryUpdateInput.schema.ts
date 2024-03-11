import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BenefitPackageUpdateOneRequiredWithoutMedicalServiceCategoriesNestedInputObjectSchema } from './BenefitPackageUpdateOneRequiredWithoutMedicalServiceCategoriesNestedInput.schema';
import { MedicalServiceCategoryUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema } from './MedicalServiceCategoryUpdateOneRequiredWithoutBeneftiPackagesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateInput> =
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
      deactivationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      benefitPackage: z
        .lazy(
          () =>
            BenefitPackageUpdateOneRequiredWithoutMedicalServiceCategoriesNestedInputObjectSchema,
        )
        .optional(),
      medicalServiceCategory: z
        .lazy(
          () =>
            MedicalServiceCategoryUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryUpdateInputObjectSchema =
  Schema;
