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

type SchemaType = z.ZodType<Prisma.EntryRecordInclude>;
export const EntryRecordIncludeObjectSchema: SchemaType = z
    .object({
        CreatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        UpdatedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        fingerprintBiometric: z.union([z.boolean(), z.lazy(() => FingerprintBiometricArgsObjectSchema)]).optional(),
        idCardBiometric: z.union([z.boolean(), z.lazy(() => IDCardArgsObjectSchema)]).optional(),
        faceBiometric: z.union([z.boolean(), z.lazy(() => FaceBiometricArgsObjectSchema)]).optional(),
        voiceBiometric: z.union([z.boolean(), z.lazy(() => VoiceBiometricArgsObjectSchema)]).optional(),
        medicalCenter: z.union([z.boolean(), z.lazy(() => MedicalCenterArgsObjectSchema)]).optional(),
        beneficiaryServices: z.union([z.boolean(), z.lazy(() => BeneficiaryServiceInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => EntryRecordCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
