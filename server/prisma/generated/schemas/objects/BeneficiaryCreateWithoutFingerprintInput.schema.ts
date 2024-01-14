import { z } from 'zod';
import { GenderCreateNestedOneWithoutBeneficiaryInputObjectSchema } from './GenderCreateNestedOneWithoutBeneficiaryInput.schema';
import { SubscriberCreateNestedOneWithoutBeneficiaryInputObjectSchema } from './SubscriberCreateNestedOneWithoutBeneficiaryInput.schema';
import { RelationshipCreateNestedOneWithoutBeneficiaryInputObjectSchema } from './RelationshipCreateNestedOneWithoutBeneficiaryInput.schema';
import { IDCardCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './IDCardCreateNestedManyWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateNestedManyWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateNestedManyWithoutBeneficiaryInput.schema';
import { EntryRecordCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './EntryRecordCreateNestedManyWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateWithoutFingerprintInput> = z
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
    legacyCode: z.string().optional().nullable(),
    isFingerprintVerificationActive: z.boolean().optional(),
    isIdCardVerificationActive: z.boolean().optional(),
    isFaceVerificationActive: z.boolean().optional(),
    isVoiceVerificationActive: z.boolean().optional(),
    gender: z
      .lazy(() => GenderCreateNestedOneWithoutBeneficiaryInputObjectSchema)
      .optional(),
    subscriber: z.lazy(
      () => SubscriberCreateNestedOneWithoutBeneficiaryInputObjectSchema,
    ),
    relationship: z.lazy(
      () => RelationshipCreateNestedOneWithoutBeneficiaryInputObjectSchema,
    ),
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
    entryRecords: z
      .lazy(
        () => EntryRecordCreateNestedManyWithoutBeneficiaryInputObjectSchema,
      )
      .optional(),
    spents: z
      .lazy(
        () =>
          BeneficiaryBalanceCreateNestedManyWithoutBeneficiaryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficiaryCreateWithoutFingerprintInputObjectSchema = Schema;
