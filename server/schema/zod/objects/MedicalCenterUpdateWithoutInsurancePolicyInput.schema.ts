/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { MedicalCenterUpdatephoneInputObjectSchema } from './MedicalCenterUpdatephoneInput.schema';
import { MedicalCenterUpdateemailInputObjectSchema } from './MedicalCenterUpdateemailInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { CityEnumUpdateOneRequiredWithoutMedicalcentersNestedInputObjectSchema } from './CityEnumUpdateOneRequiredWithoutMedicalcentersNestedInput.schema';
import { TenantUpdateOneRequiredWithoutAssignedToMedicalCenterNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutAssignedToMedicalCenterNestedInput.schema';
import { MedicalServiceUpdateManyWithoutMedicalCenterNestedInputObjectSchema } from './MedicalServiceUpdateManyWithoutMedicalCenterNestedInput.schema';
import { EntryRecordUpdateManyWithoutMedicalCenterNestedInputObjectSchema } from './EntryRecordUpdateManyWithoutMedicalCenterNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpdateWithoutInsurancePolicyInput>;
export const MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema: SchemaType = z
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
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        phone: z.union([z.lazy(() => MedicalCenterUpdatephoneInputObjectSchema), z.string().array()]).optional(),
        email: z.union([z.lazy(() => MedicalCenterUpdateemailInputObjectSchema), z.string().array()]).optional(),
        website: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        facebookLink: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        googleMapsLink: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        twitterLink: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        instagramLink: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        latitude: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        longitude: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        city: z.lazy(() => CityEnumUpdateOneRequiredWithoutMedicalcentersNestedInputObjectSchema).optional(),
        managingTenant: z
            .lazy(() => TenantUpdateOneRequiredWithoutAssignedToMedicalCenterNestedInputObjectSchema)
            .optional(),
        services: z.lazy(() => MedicalServiceUpdateManyWithoutMedicalCenterNestedInputObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordUpdateManyWithoutMedicalCenterNestedInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
