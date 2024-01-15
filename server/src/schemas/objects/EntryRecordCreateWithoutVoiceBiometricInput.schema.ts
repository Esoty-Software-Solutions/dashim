import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './IDCardCreateNestedOneWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { PatientServiceCreateNestedManyWithoutEntryRecordInputObjectSchema } from './PatientServiceCreateNestedManyWithoutEntryRecordInput.schema';
import { MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateWithoutVoiceBiometricInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
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
    idCardBiometric: z
      .lazy(() => IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema)
      .optional(),
    faceBiometric: z
      .lazy(
        () => FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema,
      )
      .optional(),
    patientServices: z
      .lazy(
        () => PatientServiceCreateNestedManyWithoutEntryRecordInputObjectSchema,
      )
      .optional(),
    medicalCenter: z.lazy(
      () => MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema,
    ),
  })
  .strict();

export const EntryRecordCreateWithoutVoiceBiometricInputObjectSchema = Schema;
