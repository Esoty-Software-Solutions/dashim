import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SubscriberUncheckedUpdateManyWithoutInsurancePolicyNestedInputObjectSchema } from './SubscriberUncheckedUpdateManyWithoutInsurancePolicyNestedInput.schema';
import { PackageMedicalServicesUncheckedUpdateManyWithoutInsurancePolicyNestedInputObjectSchema } from './PackageMedicalServicesUncheckedUpdateManyWithoutInsurancePolicyNestedInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyNestedInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUncheckedUpdateWithoutInstitutionInput> =
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
      limit: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      serviceEntryTimeWindow: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      subscribers: z
        .lazy(
          () =>
            SubscriberUncheckedUpdateManyWithoutInsurancePolicyNestedInputObjectSchema,
        )
        .optional(),
      packageMedicalServices: z
        .lazy(
          () =>
            PackageMedicalServicesUncheckedUpdateManyWithoutInsurancePolicyNestedInputObjectSchema,
        )
        .optional(),
      medicalCenters: z
        .lazy(
          () =>
            InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyUncheckedUpdateWithoutInstitutionInputObjectSchema =
  Schema;
