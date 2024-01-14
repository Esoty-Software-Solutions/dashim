import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BenefitPackageUpdateOneRequiredWithoutMedicalServicesNestedInputObjectSchema } from './BenefitPackageUpdateOneRequiredWithoutMedicalServicesNestedInput.schema';
import { MedicalCenterUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema } from './MedicalCenterUpdateOneRequiredWithoutBeneftiPackagesNestedInput.schema';
import { InsurancePolicyUpdateOneRequiredWithoutPackageMedicalServicesNestedInputObjectSchema } from './InsurancePolicyUpdateOneRequiredWithoutPackageMedicalServicesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateWithoutPatientServicesInput> =
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
      price: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      beneftiPackage: z
        .lazy(
          () =>
            BenefitPackageUpdateOneRequiredWithoutMedicalServicesNestedInputObjectSchema,
        )
        .optional(),
      medicalService: z
        .lazy(
          () =>
            MedicalCenterUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema,
        )
        .optional(),
      insurancePolicy: z
        .lazy(
          () =>
            InsurancePolicyUpdateOneRequiredWithoutPackageMedicalServicesNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PackageMedicalServicesUpdateWithoutPatientServicesInputObjectSchema =
  Schema;
