import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './IDCardCreateNestedOneWithoutEntryRecordsInput.schema';
import { FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './FaceBiometricCreateNestedOneWithoutEntryRecordsInput.schema';
import { MedicalCenterCreateNestedOneWithoutEntryRecordsInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutEntryRecordsInput.schema';
import { BeneficiaryServiceCreateNestedManyWithoutEntryRecordInputObjectSchema } from './BeneficiaryServiceCreateNestedManyWithoutEntryRecordInput.schema';

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
    idCardBiometric: z
      .lazy(() => IDCardCreateNestedOneWithoutEntryRecordsInputObjectSchema)
      .optional(),
    faceBiometric: z
      .lazy(
        () => FaceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema,
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

export const EntryRecordCreateWithoutVoiceBiometricInputObjectSchema = Schema;
