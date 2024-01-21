import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutSubscriberFutureStatusCreationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSubscriberFutureStatusCreationsNestedInput.schema';
import { SubscriberUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema } from './SubscriberUpdateOneRequiredWithoutFutureStatusNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpdateWithoutUpdatedByInput> =
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
      changeDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      futureStatus: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      CreatedBy: z
        .lazy(
          () =>
            UserUpdateOneRequiredWithoutSubscriberFutureStatusCreationsNestedInputObjectSchema,
        )
        .optional(),
      subscriber: z
        .lazy(
          () =>
            SubscriberUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriberFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema =
  Schema;
