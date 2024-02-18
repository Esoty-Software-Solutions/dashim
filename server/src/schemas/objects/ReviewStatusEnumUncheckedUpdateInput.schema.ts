import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutTransactionReviewStatusNestedInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutMedicalReviewStatusNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumUncheckedUpdateInput> = z
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
    arabic: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    english: z
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
    transactionBeneficiaryServices: z
      .lazy(
        () =>
          ReviewStatusUncheckedUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema,
      )
      .optional(),
    medicalBeneficiaryServices: z
      .lazy(
        () =>
          ReviewStatusUncheckedUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ReviewStatusEnumUncheckedUpdateInputObjectSchema = Schema;
