import { z } from 'zod';
import { FingerprintBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { IDCardUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateNestedManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUncheckedCreateWithoutEntryRecordsInput> =
  z
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
      genderId: z.string(),
      nationality: z.string().optional().nullable(),
      nationalID: z.string().optional().nullable(),
      residence: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      subscriberId: z.string(),
      legacyCode: z.string().optional().nullable(),
      relationshipId: z.string(),
      isFingerprintVerificationActive: z.boolean().optional(),
      isIdCardVerificationActive: z.boolean().optional(),
      isFaceVerificationActive: z.boolean().optional(),
      isVoiceVerificationActive: z.boolean().optional(),
      fingerprint: z
        .lazy(
          () =>
            FingerprintBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      idCard: z
        .lazy(
          () =>
            IDCardUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      face: z
        .lazy(
          () =>
            FaceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      voice: z
        .lazy(
          () =>
            VoiceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      beneficiaryBalances: z
        .lazy(
          () =>
            BeneficiaryBalanceUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficiaryUncheckedCreateWithoutEntryRecordsInputObjectSchema =
  Schema;
