import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { InstitutionUpdateOneRequiredWithoutPoliciesNestedInputObjectSchema } from './InstitutionUpdateOneRequiredWithoutPoliciesNestedInput.schema';
import { SubscriberUpdateManyWithoutInsurancePolicyNestedInputObjectSchema } from './SubscriberUpdateManyWithoutInsurancePolicyNestedInput.schema';
import { PackageMedicalServicesUpdateManyWithoutInsurancePolicyNestedInputObjectSchema } from './PackageMedicalServicesUpdateManyWithoutInsurancePolicyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateWithoutMedicalCentersInput> =
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
      coPay: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      limit: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      institution: z
        .lazy(
          () =>
            InstitutionUpdateOneRequiredWithoutPoliciesNestedInputObjectSchema,
        )
        .optional(),
      subscribers: z
        .lazy(
          () =>
            SubscriberUpdateManyWithoutInsurancePolicyNestedInputObjectSchema,
        )
        .optional(),
      packageMedicalServices: z
        .lazy(
          () =>
            PackageMedicalServicesUpdateManyWithoutInsurancePolicyNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema =
  Schema;