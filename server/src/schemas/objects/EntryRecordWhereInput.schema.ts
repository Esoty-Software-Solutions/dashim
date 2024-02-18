import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { BeneficiaryRelationFilterObjectSchema } from './BeneficiaryRelationFilter.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { FingerprintBiometricRelationFilterObjectSchema } from './FingerprintBiometricRelationFilter.schema';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';
import { IDCardRelationFilterObjectSchema } from './IDCardRelationFilter.schema';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';
import { FaceBiometricRelationFilterObjectSchema } from './FaceBiometricRelationFilter.schema';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';
import { VoiceBiometricRelationFilterObjectSchema } from './VoiceBiometricRelationFilter.schema';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';
import { MedicalCenterRelationFilterObjectSchema } from './MedicalCenterRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { BeneficiaryServiceListRelationFilterObjectSchema } from './BeneficiaryServiceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EntryRecordWhereInputObjectSchema),
        z.lazy(() => EntryRecordWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EntryRecordWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EntryRecordWhereInputObjectSchema),
        z.lazy(() => EntryRecordWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    createdById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updatedById: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deactivationReason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    deactivationDate: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    isValidated: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isManuallyInserted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    notes: z.lazy(() => JsonFilterObjectSchema).optional(),
    beneficiaryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fingerprintId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    idCardId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    faceId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    voiceId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    medicalCenterId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    CreatedBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    UpdatedBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    beneficiary: z
      .union([
        z.lazy(() => BeneficiaryRelationFilterObjectSchema),
        z.lazy(() => BeneficiaryWhereInputObjectSchema),
      ])
      .optional(),
    fingerprintBiometric: z
      .union([
        z.lazy(() => FingerprintBiometricRelationFilterObjectSchema),
        z.lazy(() => FingerprintBiometricWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    idCardBiometric: z
      .union([
        z.lazy(() => IDCardRelationFilterObjectSchema),
        z.lazy(() => IDCardWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    faceBiometric: z
      .union([
        z.lazy(() => FaceBiometricRelationFilterObjectSchema),
        z.lazy(() => FaceBiometricWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    voiceBiometric: z
      .union([
        z.lazy(() => VoiceBiometricRelationFilterObjectSchema),
        z.lazy(() => VoiceBiometricWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    medicalCenter: z
      .union([
        z.lazy(() => MedicalCenterRelationFilterObjectSchema),
        z.lazy(() => MedicalCenterWhereInputObjectSchema),
      ])
      .optional(),
    beneficiaryServices: z
      .lazy(() => BeneficiaryServiceListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EntryRecordWhereInputObjectSchema = Schema;
