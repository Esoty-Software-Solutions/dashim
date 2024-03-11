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

type SchemaType = z.ZodType<Prisma.BeneficiaryInclude>;
export const BeneficiaryIncludeObjectSchema: SchemaType = z
    .object({
        gender: z.union([z.boolean(), z.lazy(() => GenderEnumArgsObjectSchema)]).optional(),
        StatusSetBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        beneficiaryEntity: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityArgsObjectSchema)]).optional(),
        relationship: z.union([z.boolean(), z.lazy(() => RelationshipEnumArgsObjectSchema)]).optional(),
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
