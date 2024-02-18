import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { VoiceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutEntryRecordsInput.schema';
import { BeneficiaryServiceCreateNestedManyWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateNestedManyWithoutEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateWithoutIdCardBiometricInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    isValidated: z.boolean(),
    isManuallyInserted: z.boolean().optional(),
    beneficiary: z.lazy(
      () => BeneficiaryCreateNestedOneWithoutEntryRecordsInputObjectSchema,
    ),
    fingerprintBiometric: z
      .lazy(
        () =>
          FingerprintBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema,
      )
      .optional(),
    faceBiometric: z
      .lazy(
        () => FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema,
      )
      .optional(),
    voiceBiometric: z
      .lazy(
        () => VoiceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema,
      )
      .optional(),
    medicalCenter: z.lazy(
      () => MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema,
    ),
    beneficiaryServices: z
      .lazy(
        () =>
          BeneficiaryServiceCreateNestedManyWithoutEntryRecordInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EntryRecordCreateWithoutIdCardBiometricInputObjectSchema = Schema;
