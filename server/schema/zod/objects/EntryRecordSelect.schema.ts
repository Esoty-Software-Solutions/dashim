/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BeneficiaryArgsObjectSchema } from './BeneficiaryArgs.schema';
import { FingerprintBiometricArgsObjectSchema } from './FingerprintBiometricArgs.schema';
import { IDCardArgsObjectSchema } from './IDCardArgs.schema';
import { FaceBiometricArgsObjectSchema } from './FaceBiometricArgs.schema';
import { VoiceBiometricArgsObjectSchema } from './VoiceBiometricArgs.schema';
import { MedicalCenterArgsObjectSchema } from './MedicalCenterArgs.schema';
import { BeneficiaryServiceInputSchema } from '../input/BeneficiaryServiceInput.schema';
import { EntryRecordCountOutputTypeArgsObjectSchema } from './EntryRecordCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordSelect>;
export const EntryRecordSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        CreatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        createdById: z.boolean().optional(),
        UpdatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        updatedById: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        isValidated: z.boolean().optional(),
        isManuallyInserted: z.boolean().optional(),
        notes: z.boolean().optional(),
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        beneficiaryId: z.boolean().optional(),
        fingerprintBiometric: z.union([z.boolean(), z.lazy(() => FingerprintBiometricArgsObjectSchema)]).optional(),
        fingerprintId: z.boolean().optional(),
        idCardBiometric: z.union([z.boolean(), z.lazy(() => IDCardArgsObjectSchema)]).optional(),
        idCardId: z.boolean().optional(),
        faceBiometric: z.union([z.boolean(), z.lazy(() => FaceBiometricArgsObjectSchema)]).optional(),
        faceId: z.boolean().optional(),
        voiceBiometric: z.union([z.boolean(), z.lazy(() => VoiceBiometricArgsObjectSchema)]).optional(),
        voiceId: z.boolean().optional(),
        medicalCenter: z.union([z.boolean(), z.lazy(() => MedicalCenterArgsObjectSchema)]).optional(),
        medicalCenterId: z.boolean().optional(),
        beneficiaryServices: z.union([z.boolean(), z.lazy(() => BeneficiaryServiceInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => EntryRecordCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
