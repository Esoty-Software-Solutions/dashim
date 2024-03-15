/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBeneficiaryFutureStatusCreationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBeneficiaryFutureStatusCreationsNestedInput.schema';
import { UserUpdateOneWithoutBeneficiaryFutureStatusUpdatesNestedInputObjectSchema } from './UserUpdateOneWithoutBeneficiaryFutureStatusUpdatesNestedInput.schema';
import { BeneficiaryUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema } from './BeneficiaryUpdateOneRequiredWithoutFutureStatusNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateInput>;
export const BeneficiaryFutureStatusChangeUpdateInputObjectSchema: SchemaType = z
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
        changeDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        futureStatus: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        CreatedBy: z
            .lazy(() => UserUpdateOneRequiredWithoutBeneficiaryFutureStatusCreationsNestedInputObjectSchema)
            .optional(),
        UpdatedBy: z.lazy(() => UserUpdateOneWithoutBeneficiaryFutureStatusUpdatesNestedInputObjectSchema).optional(),
        beneficiary: z.lazy(() => BeneficiaryUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
