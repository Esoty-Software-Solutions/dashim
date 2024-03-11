/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ReviewStatusUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema } from './ReviewStatusUpdateManyWithoutTransactionReviewStatusNestedInput.schema';
import { ReviewStatusUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema } from './ReviewStatusUpdateManyWithoutMedicalReviewStatusNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumUpdateInput>;
export const ReviewStatusEnumUpdateInputObjectSchema: SchemaType = z
    .object({
        id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        createdAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        isPublished: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        isSoftDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        arabic: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        english: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        transactionBeneficiaryServices: z
            .lazy(() => ReviewStatusUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema)
            .optional(),
        medicalBeneficiaryServices: z
            .lazy(() => ReviewStatusUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;