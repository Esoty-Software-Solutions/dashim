import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MedicalCenterUpdateOneRequiredWithoutServicesNestedInputObjectSchema } from './MedicalCenterUpdateOneRequiredWithoutServicesNestedInput.schema';
import { PatientServiceUpdateManyWithoutMedicalServiceNestedInputObjectSchema } from './PatientServiceUpdateManyWithoutMedicalServiceNestedInput.schema';
import { InstitutionMedicalCeneterServiceUpdateManyWithoutMedicalCenterServiceNestedInputObjectSchema } from './InstitutionMedicalCeneterServiceUpdateManyWithoutMedicalCenterServiceNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpdateWithoutTemplateInput> =
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
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      medicalCenterCode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      basePrice: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      medicalCenter: z
        .lazy(
          () =>
            MedicalCenterUpdateOneRequiredWithoutServicesNestedInputObjectSchema,
        )
        .optional(),
      patientServices: z
        .lazy(
          () =>
            PatientServiceUpdateManyWithoutMedicalServiceNestedInputObjectSchema,
        )
        .optional(),
      institutionPricing: z
        .lazy(
          () =>
            InstitutionMedicalCeneterServiceUpdateManyWithoutMedicalCenterServiceNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterServiceUpdateWithoutTemplateInputObjectSchema =
  Schema;
