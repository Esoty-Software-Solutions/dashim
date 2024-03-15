/* eslint-disable */
import { z } from 'zod';
import { GenderEnumCreateNestedOneWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateNestedOneWithoutBeneficiaryInput.schema';
import { UserCreateNestedOneWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryStatusChangesInput.schema';
import { BeneficiaryEntityCreateNestedOneWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateNestedOneWithoutBeneficiariesInput.schema';
import { RelationshipEnumCreateNestedOneWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateNestedOneWithoutBeneficiaryInput.schema';
import { FingerprintBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateNestedManyWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateNestedManyWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateNestedManyWithoutBeneficiaryInput.schema';
import { EntryRecordCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateNestedManyWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateNestedManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateWithoutIdCardInput>;
export const BeneficiaryCreateWithoutIdCardInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        firstName: z.string(),
        secondName: z.union([z.string(), z.null()]).optional().nullable(),
        thirdName: z.union([z.string(), z.null()]).optional().nullable(),
        fourthName: z.union([z.string(), z.null()]).optional().nullable(),
        lastName: z.string(),
        searchName: z.string(),
        birthDate: z.union([z.date(), z.string().datetime()]),
        nationality: z.union([z.string(), z.null()]).optional().nullable(),
        nationalID: z.union([z.string(), z.null()]).optional().nullable(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        legacyCode: z.union([z.string(), z.null()]).optional().nullable(),
        gender: z.lazy(() => GenderEnumCreateNestedOneWithoutBeneficiaryInputObjectSchema),
        StatusSetBy: z.lazy(() => UserCreateNestedOneWithoutBeneficiaryStatusChangesInputObjectSchema),
        beneficiaryEntity: z.lazy(() => BeneficiaryEntityCreateNestedOneWithoutBeneficiariesInputObjectSchema),
        relationship: z.lazy(() => RelationshipEnumCreateNestedOneWithoutBeneficiaryInputObjectSchema),
        fingerprint: z.lazy(() => FingerprintBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema).optional(),
        face: z.lazy(() => FaceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema).optional(),
        voice: z.lazy(() => VoiceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordCreateNestedManyWithoutBeneficiaryInputObjectSchema).optional(),
        beneficiaryBalances: z
            .lazy(() => BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInputObjectSchema)
            .optional(),
        futureStatus: z
            .lazy(() => BeneficiaryFutureStatusChangeCreateNestedManyWithoutBeneficiaryInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
