/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { IDCardUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { EntryRecordUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUncheckedCreateWithoutVoiceInput>;
export const BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema: SchemaType = z
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
        genderId: z.string(),
        nationality: z.union([z.string(), z.null()]).optional().nullable(),
        nationalID: z.union([z.string(), z.null()]).optional().nullable(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        statusSetById: z.string(),
        beneficiaryEntityId: z.string(),
        legacyCode: z.union([z.string(), z.null()]).optional().nullable(),
        relationshipId: z.string(),
        fingerprint: z
            .lazy(() => FingerprintBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema)
            .optional(),
        idCard: z.lazy(() => IDCardUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema).optional(),
        face: z.lazy(() => FaceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema).optional(),
        beneficiaryBalances: z
            .lazy(() => BeneficiaryBalanceUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema)
            .optional(),
        futureStatus: z
            .lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
