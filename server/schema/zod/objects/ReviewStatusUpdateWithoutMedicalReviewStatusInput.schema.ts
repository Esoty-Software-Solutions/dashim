/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutReviewStatusCreationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutReviewStatusCreationsNestedInput.schema';
import { UserUpdateOneWithoutReviewStatusUpdatesNestedInputObjectSchema } from './UserUpdateOneWithoutReviewStatusUpdatesNestedInput.schema';
import { BeneficiaryServiceUpdateOneWithoutReviewStatusNestedInputObjectSchema } from './BeneficiaryServiceUpdateOneWithoutReviewStatusNestedInput.schema';
import { ReviewStatusEnumUpdateOneRequiredWithoutTransactionBeneficiaryServicesNestedInputObjectSchema } from './ReviewStatusEnumUpdateOneRequiredWithoutTransactionBeneficiaryServicesNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateWithoutMedicalReviewStatusInput>;
export const ReviewStatusUpdateWithoutMedicalReviewStatusInputObjectSchema: SchemaType = z
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
        CreatedBy: z.lazy(() => UserUpdateOneRequiredWithoutReviewStatusCreationsNestedInputObjectSchema).optional(),
        UpdatedBy: z.lazy(() => UserUpdateOneWithoutReviewStatusUpdatesNestedInputObjectSchema).optional(),
        beneficiaryService: z
            .lazy(() => BeneficiaryServiceUpdateOneWithoutReviewStatusNestedInputObjectSchema)
            .optional(),
        transactionReviewStatus: z
            .lazy(() => ReviewStatusEnumUpdateOneRequiredWithoutTransactionBeneficiaryServicesNestedInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
