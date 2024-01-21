import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutSubscriberStatusChangesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSubscriberStatusChangesNestedInput.schema';
import { InsurancePolicyUpdateOneRequiredWithoutSubscribersNestedInputObjectSchema } from './InsurancePolicyUpdateOneRequiredWithoutSubscribersNestedInput.schema';
import { BeneficiaryUpdateManyWithoutSubscriberNestedInputObjectSchema } from './BeneficiaryUpdateManyWithoutSubscriberNestedInput.schema';
import { SubscriberFutureStatusChangeUpdateManyWithoutSubscriberNestedInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyWithoutSubscriberNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateInput> = z
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
    StatusSetBy: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutSubscriberStatusChangesNestedInputObjectSchema,
      )
      .optional(),
    insurancePolicy: z
      .lazy(
        () =>
          InsurancePolicyUpdateOneRequiredWithoutSubscribersNestedInputObjectSchema,
      )
      .optional(),
    beneficiaries: z
      .lazy(() => BeneficiaryUpdateManyWithoutSubscriberNestedInputObjectSchema)
      .optional(),
    futureStatus: z
      .lazy(
        () =>
          SubscriberFutureStatusChangeUpdateManyWithoutSubscriberNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SubscriberUpdateInputObjectSchema = Schema;
