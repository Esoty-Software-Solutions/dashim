import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBeneficiaryEntityFutureStatusCreationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBeneficiaryEntityFutureStatusCreationsNestedInput.schema';
import { UserUpdateOneWithoutBeneficiaryEntityFutureStatusChangesNestedInputObjectSchema } from './UserUpdateOneWithoutBeneficiaryEntityFutureStatusChangesNestedInput.schema';
import { BeneficiaryEntityUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema } from './BeneficiaryEntityUpdateOneRequiredWithoutFutureStatusNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateInput> =
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
            UserUpdateOneRequiredWithoutBeneficiaryEntityFutureStatusCreationsNestedInputObjectSchema,
        )
        .optional(),
      UpdatedBy: z
        .lazy(
          () =>
            UserUpdateOneWithoutBeneficiaryEntityFutureStatusChangesNestedInputObjectSchema,
        )
        .optional(),
      beneficiaryEntity: z
        .lazy(
          () =>
            BeneficiaryEntityUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryEntityFutureStatusChangeUpdateInputObjectSchema =
  Schema;
