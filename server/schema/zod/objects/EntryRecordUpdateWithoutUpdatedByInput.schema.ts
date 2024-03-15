/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { UserUpdateOneRequiredWithoutEntryRecordServiceCreationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutEntryRecordServiceCreationsNestedInput.schema';
import { BeneficiaryUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema } from './BeneficiaryUpdateOneRequiredWithoutEntryRecordsNestedInput.schema';
import { FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInput.schema';
import { IDCardUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './IDCardUpdateOneWithoutEntryRecordsNestedInput.schema';
import { FaceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './FaceBiometricUpdateOneWithoutEntryRecordsNestedInput.schema';
import { VoiceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema } from './VoiceBiometricUpdateOneWithoutEntryRecordsNestedInput.schema';
import { MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema } from './MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInput.schema';
import { BeneficiaryServiceUpdateManyWithoutEntryRecordNestedInputObjectSchema } from './BeneficiaryServiceUpdateManyWithoutEntryRecordNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())]),
);

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateWithoutUpdatedByInput>;
export const EntryRecordUpdateWithoutUpdatedByInputObjectSchema: SchemaType = z
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
        isValidated: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        isManuallyInserted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
        notes: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]).optional(),
        CreatedBy: z
            .lazy(() => UserUpdateOneRequiredWithoutEntryRecordServiceCreationsNestedInputObjectSchema)
            .optional(),
        beneficiary: z.lazy(() => BeneficiaryUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema).optional(),
        fingerprintBiometric: z
            .lazy(() => FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema)
            .optional(),
        idCardBiometric: z.lazy(() => IDCardUpdateOneWithoutEntryRecordsNestedInputObjectSchema).optional(),
        faceBiometric: z.lazy(() => FaceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema).optional(),
        voiceBiometric: z.lazy(() => VoiceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema).optional(),
        medicalCenter: z
            .lazy(() => MedicalCenterUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema)
            .optional(),
        beneficiaryServices: z
            .lazy(() => BeneficiaryServiceUpdateManyWithoutEntryRecordNestedInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
