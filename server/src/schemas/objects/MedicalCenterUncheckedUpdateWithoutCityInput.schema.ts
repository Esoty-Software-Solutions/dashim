import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { MedicalCenterUpdatephoneInputObjectSchema } from './MedicalCenterUpdatephoneInput.schema';
import { MedicalCenterUpdateemailInputObjectSchema } from './MedicalCenterUpdateemailInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { MedicalServiceUncheckedUpdateManyWithoutMedicalCenterNestedInputObjectSchema } from './MedicalServiceUncheckedUpdateManyWithoutMedicalCenterNestedInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCenterNestedInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCenterNestedInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutMedicalCenterNestedInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutMedicalCenterNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUncheckedUpdateWithoutCityInput> = z
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
    managingTenantId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    services: z
      .lazy(
        () =>
          MedicalServiceUncheckedUpdateManyWithoutMedicalCenterNestedInputObjectSchema,
      )
      .optional(),
    insurancePolicy: z
      .lazy(
        () =>
          InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCenterNestedInputObjectSchema,
      )
      .optional(),
    entryRecords: z
      .lazy(
        () =>
          EntryRecordUncheckedUpdateManyWithoutMedicalCenterNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema = Schema;
