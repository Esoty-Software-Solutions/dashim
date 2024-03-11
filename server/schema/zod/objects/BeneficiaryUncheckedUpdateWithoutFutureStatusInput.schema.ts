/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { IDCardUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './IDCardUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { FaceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './FaceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { EntryRecordUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './EntryRecordUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';
import { BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUncheckedUpdateWithoutFutureStatusInput>;
export const BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema: SchemaType = z
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
        genderId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
        statusSetById: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        beneficiaryEntityId: z
            .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
            .optional(),
        legacyCode: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        relationshipId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        fingerprint: z
            .lazy(() => FingerprintBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema)
            .optional(),
        idCard: z.lazy(() => IDCardUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        face: z.lazy(() => FaceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        voice: z.lazy(() => VoiceBiometricUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema).optional(),
        beneficiaryBalances: z
            .lazy(() => BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
