import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BenefitPackageUpdateOneRequiredWithoutMedicalServicesNestedInputObjectSchema } from './BenefitPackageUpdateOneRequiredWithoutMedicalServicesNestedInput.schema';
import { InsurancePolicyUpdateOneRequiredWithoutPackageMedicalServicesNestedInputObjectSchema } from './InsurancePolicyUpdateOneRequiredWithoutPackageMedicalServicesNestedInput.schema';
import { PatientServiceUpdateManyWithoutServiceNestedInputObjectSchema } from './PatientServiceUpdateManyWithoutServiceNestedInput.schema';
import { PatientExaminationUpdateManyWithoutServiceNestedInputObjectSchema } from './PatientExaminationUpdateManyWithoutServiceNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesUpdateWithoutMedicalServiceInput> =
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
      insurancePolicy: z
        .lazy(
          () =>
            InsurancePolicyUpdateOneRequiredWithoutPackageMedicalServicesNestedInputObjectSchema,
        )
        .optional(),
      patientServices: z
        .lazy(
          () => PatientServiceUpdateManyWithoutServiceNestedInputObjectSchema,
        )
        .optional(),
      patientExaminations: z
        .lazy(
          () =>
            PatientExaminationUpdateManyWithoutServiceNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PackageMedicalServicesUpdateWithoutMedicalServiceInputObjectSchema =
  Schema;
