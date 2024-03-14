/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { GenderEnumUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema } from './GenderEnumUpdateOneRequiredWithoutBeneficiaryNestedInput.schema';
import { UserUpdateOneRequiredWithoutBeneficiaryStatusChangesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBeneficiaryStatusChangesNestedInput.schema';
import { BeneficiaryEntityUpdateOneRequiredWithoutBeneficiariesNestedInputObjectSchema } from './BeneficiaryEntityUpdateOneRequiredWithoutBeneficiariesNestedInput.schema';
import { RelationshipEnumUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema } from './RelationshipEnumUpdateOneRequiredWithoutBeneficiaryNestedInput.schema';
import { FingerprintBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FingerprintBiometricUpdateManyWithoutBeneficiaryNestedInput.schema';
import { IDCardUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './IDCardUpdateManyWithoutBeneficiaryNestedInput.schema';
import { FaceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FaceBiometricUpdateManyWithoutBeneficiaryNestedInput.schema';
import { VoiceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './VoiceBiometricUpdateManyWithoutBeneficiaryNestedInput.schema';
import { EntryRecordUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './EntryRecordUpdateManyWithoutBeneficiaryNestedInput.schema';
import { BeneficiaryBalanceUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './BeneficiaryBalanceUpdateManyWithoutBeneficiaryNestedInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithoutBeneficiaryNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateInput>;
export const BeneficiaryUpdateInputObjectSchema: SchemaType = z
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
        firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        secondName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        thirdName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        fourthName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        searchName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        birthDate: z
            .union([
                z.union([z.date(), z.string().datetime().optional()]),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        nationality: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        nationalID: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
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
        legacyCode: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        gender: z.lazy(() => GenderEnumUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema).optional(),
        StatusSetBy: z
            .lazy(() => UserUpdateOneRequiredWithoutBeneficiaryStatusChangesNestedInputObjectSchema)
            .optional(),
        beneficiaryEntity: z
            .lazy(() => BeneficiaryEntityUpdateOneRequiredWithoutBeneficiariesNestedInputObjectSchema)
            .optional(),
        relationship: z
            .lazy(() => RelationshipEnumUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema)
            .optional(),
        fingerprint: z.lazy(() => FingerprintBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        idCard: z.lazy(() => IDCardUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        face: z.lazy(() => FaceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        voice: z.lazy(() => VoiceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        beneficiaryBalances: z
            .lazy(() => BeneficiaryBalanceUpdateManyWithoutBeneficiaryNestedInputObjectSchema)
            .optional(),
        futureStatus: z
            .lazy(() => BeneficiaryFutureStatusChangeUpdateManyWithoutBeneficiaryNestedInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
