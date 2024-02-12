import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { MedicalCenterUpdatephoneInputObjectSchema } from './MedicalCenterUpdatephoneInput.schema';
import { MedicalCenterUpdateemailInputObjectSchema } from './MedicalCenterUpdateemailInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { CityUpdateOneRequiredWithoutMedicalcentersNestedInputObjectSchema } from './CityUpdateOneRequiredWithoutMedicalcentersNestedInput.schema';
import { MedicalServiceUpdateManyWithoutMedicalCenterNestedInputObjectSchema } from './MedicalServiceUpdateManyWithoutMedicalCenterNestedInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyWithoutMedicalCenterNestedInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateManyWithoutMedicalCenterNestedInput.schema';
import { EntryRecordUpdateManyWithoutMedicalCenterNestedInputObjectSchema } from './EntryRecordUpdateManyWithoutMedicalCenterNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpdateWithoutManagingTenantInput> =
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
      address: z
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
      code: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      description: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      phone: z
        .union([
          z.lazy(() => MedicalCenterUpdatephoneInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      email: z
        .union([
          z.lazy(() => MedicalCenterUpdateemailInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      website: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      facebookLink: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      googleMapsLink: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      twitterLink: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      instagramLink: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      latitude: z
        .union([
          z.number(),
          z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      longitude: z
        .union([
          z.number(),
          z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      city: z
        .lazy(
          () =>
            CityUpdateOneRequiredWithoutMedicalcentersNestedInputObjectSchema,
        )
        .optional(),
      services: z
        .lazy(
          () =>
            MedicalServiceUpdateManyWithoutMedicalCenterNestedInputObjectSchema,
        )
        .optional(),
      insurancePolicy: z
        .lazy(
          () =>
            InsurancePolicyMedicalCenterUpdateManyWithoutMedicalCenterNestedInputObjectSchema,
        )
        .optional(),
      entryRecords: z
        .lazy(
          () =>
            EntryRecordUpdateManyWithoutMedicalCenterNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterUpdateWithoutManagingTenantInputObjectSchema = Schema;
