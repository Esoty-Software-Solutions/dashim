import { z } from 'zod';
import { GenderCreateNestedOneWithoutBeneficiaryInputObjectSchema } from './GenderCreateNestedOneWithoutBeneficiaryInput.schema';
import { UserCreateNestedOneWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateNestedOneWithoutBeneficiaryStatusChangesInput.schema';
import { SubscriberCreateNestedOneWithoutBeneficiariesInputObjectSchema } from './SubscriberCreateNestedOneWithoutBeneficiariesInput.schema';
import { RelationshipCreateNestedOneWithoutBeneficiaryInputObjectSchema } from './RelationshipCreateNestedOneWithoutBeneficiaryInput.schema';
import { FingerprintBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateNestedManyWithoutBeneficiaryInput.schema';
import { IDCardCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './IDCardCreateNestedManyWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateNestedManyWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateNestedManyWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateNestedManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateWithoutEntryRecordsInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    firstName: z.string(),
    secondName: z.string().optional().nullable(),
    thirdName: z.string().optional().nullable(),
    fourthName: z.string().optional().nullable(),
    lastName: z.string(),
    searchName: z.string(),
    birthDate: z.coerce.date(),
    nationality: z.string().optional().nullable(),
    nationalID: z.string().optional().nullable(),
    residence: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    deactivationDate: z.coerce.date().optional().nullable(),
    legacyCode: z.string().optional().nullable(),
    isFingerprintVerificationActive: z.boolean().optional(),
    isIdCardVerificationActive: z.boolean().optional(),
    isFaceVerificationActive: z.boolean().optional(),
    isVoiceVerificationActive: z.boolean().optional(),
    gender: z.lazy(
      () => GenderCreateNestedOneWithoutBeneficiaryInputObjectSchema,
    ),
    StatusSetBy: z.lazy(
      () => UserCreateNestedOneWithoutBeneficiaryStatusChangesInputObjectSchema,
    ),
    subscriber: z.lazy(
      () => SubscriberCreateNestedOneWithoutBeneficiariesInputObjectSchema,
    ),
    relationship: z.lazy(
      () => RelationshipCreateNestedOneWithoutBeneficiaryInputObjectSchema,
    ),
    fingerprint: z
      .lazy(
        () =>
          FingerprintBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema,
      )
      .optional(),
    idCard: z
      .lazy(() => IDCardCreateNestedManyWithoutBeneficiaryInputObjectSchema)
      .optional(),
    face: z
      .lazy(
        () => FaceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema,
      )
      .optional(),
    voice: z
      .lazy(
        () => VoiceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema,
      )
      .optional(),
    beneficiaryBalances: z
      .lazy(
        () =>
          BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInputObjectSchema,
      )
      .optional(),
    futureStatus: z
      .lazy(
        () =>
          BeneficiaryFutureStatusChangeCreateNestedManyWithoutBeneficiaryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryCreateWithoutEntryRecordsInputObjectSchema = Schema;
