/* eslint-disable */
import { z } from 'zod';
import { GenderEnumArgsObjectSchema } from './GenderEnumArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BeneficiaryEntityArgsObjectSchema } from './BeneficiaryEntityArgs.schema';
import { RelationshipEnumArgsObjectSchema } from './RelationshipEnumArgs.schema';
import { FingerprintBiometricInputSchema } from '../input/FingerprintBiometricInput.schema';
import { IDCardInputSchema } from '../input/IDCardInput.schema';
import { FaceBiometricInputSchema } from '../input/FaceBiometricInput.schema';
import { VoiceBiometricInputSchema } from '../input/VoiceBiometricInput.schema';
import { EntryRecordInputSchema } from '../input/EntryRecordInput.schema';
import { BeneficiaryBalanceInputSchema } from '../input/BeneficiaryBalanceInput.schema';
import { BeneficiaryFutureStatusChangeInputSchema } from '../input/BeneficiaryFutureStatusChangeInput.schema';
import { BeneficiaryCountOutputTypeArgsObjectSchema } from './BeneficiaryCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiarySelect>;
export const BeneficiarySelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        firstName: z.boolean().optional(),
        secondName: z.boolean().optional(),
        thirdName: z.boolean().optional(),
        fourthName: z.boolean().optional(),
        lastName: z.boolean().optional(),
        searchName: z.boolean().optional(),
        birthDate: z.boolean().optional(),
        gender: z.union([z.boolean(), z.lazy(() => GenderEnumArgsObjectSchema)]).optional(),
        genderId: z.boolean().optional(),
        nationality: z.boolean().optional(),
        nationalID: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        StatusSetBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        statusSetById: z.boolean().optional(),
        beneficiaryEntity: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityArgsObjectSchema)]).optional(),
        beneficiaryEntityId: z.boolean().optional(),
        legacyCode: z.boolean().optional(),
        relationship: z.union([z.boolean(), z.lazy(() => RelationshipEnumArgsObjectSchema)]).optional(),
        relationshipId: z.boolean().optional(),
        fingerprint: z.union([z.boolean(), z.lazy(() => FingerprintBiometricInputSchema.findMany)]).optional(),
        idCard: z.union([z.boolean(), z.lazy(() => IDCardInputSchema.findMany)]).optional(),
        face: z.union([z.boolean(), z.lazy(() => FaceBiometricInputSchema.findMany)]).optional(),
        voice: z.union([z.boolean(), z.lazy(() => VoiceBiometricInputSchema.findMany)]).optional(),
        entryRecords: z.union([z.boolean(), z.lazy(() => EntryRecordInputSchema.findMany)]).optional(),
        beneficiaryBalances: z.union([z.boolean(), z.lazy(() => BeneficiaryBalanceInputSchema.findMany)]).optional(),
        futureStatus: z
            .union([z.boolean(), z.lazy(() => BeneficiaryFutureStatusChangeInputSchema.findMany)])
            .optional(),
        _count: z.union([z.boolean(), z.lazy(() => BeneficiaryCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
