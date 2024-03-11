/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MedicalCenterUpdateOneRequiredWithoutServicesNestedInputObjectSchema } from './MedicalCenterUpdateOneRequiredWithoutServicesNestedInput.schema';
import { BeneficiaryServiceUpdateManyWithoutMedicalServiceNestedInputObjectSchema } from './BeneficiaryServiceUpdateManyWithoutMedicalServiceNestedInput.schema';
import { MedicalServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectSchema } from './MedicalServiceCategoryUpdateOneRequiredWithoutServicesNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpdateWithoutInstitutionPricingInput>;
export const MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema: SchemaType = z
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
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        medicalCenterCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        basePrice: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
        medicalCenter: z.lazy(() => MedicalCenterUpdateOneRequiredWithoutServicesNestedInputObjectSchema).optional(),
        beneficiaryServices: z
            .lazy(() => BeneficiaryServiceUpdateManyWithoutMedicalServiceNestedInputObjectSchema)
            .optional(),
        category: z
            .lazy(() => MedicalServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
