/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBeneficiaryEntityStatusChangesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBeneficiaryEntityStatusChangesNestedInput.schema';
import { CityEnumUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema } from './CityEnumUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput.schema';
import { InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema } from './InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInput.schema';
import { BeneficiaryUpdateManyWithoutBeneficiaryEntityNestedInputObjectSchema } from './BeneficiaryUpdateManyWithoutBeneficiaryEntityNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateWithoutFutureStatusInput>;
export const BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema: SchemaType = z
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
        isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        deactivationReason: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        deactivationDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        address: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        StatusSetBy: z
            .lazy(() => UserUpdateOneRequiredWithoutBeneficiaryEntityStatusChangesNestedInputObjectSchema)
            .optional(),
        city: z.lazy(() => CityEnumUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema).optional(),
        insurancePolicy: z
            .lazy(() => InsurancePolicyUpdateOneRequiredWithoutBeneficiaryEntitiesNestedInputObjectSchema)
            .optional(),
        beneficiaries: z.lazy(() => BeneficiaryUpdateManyWithoutBeneficiaryEntityNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
