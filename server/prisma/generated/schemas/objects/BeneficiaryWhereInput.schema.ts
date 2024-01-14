import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { GenderRelationFilterObjectSchema } from './GenderRelationFilter.schema';
import { GenderWhereInputObjectSchema } from './GenderWhereInput.schema';
import { SubscriberRelationFilterObjectSchema } from './SubscriberRelationFilter.schema';
import { SubscriberWhereInputObjectSchema } from './SubscriberWhereInput.schema';
import { RelationshipRelationFilterObjectSchema } from './RelationshipRelationFilter.schema';
import { RelationshipWhereInputObjectSchema } from './RelationshipWhereInput.schema';
import { FingerprintBiometricListRelationFilterObjectSchema } from './FingerprintBiometricListRelationFilter.schema';
import { IDCardListRelationFilterObjectSchema } from './IDCardListRelationFilter.schema';
import { FaceBiometricListRelationFilterObjectSchema } from './FaceBiometricListRelationFilter.schema';
import { VoiceBiometricListRelationFilterObjectSchema } from './VoiceBiometricListRelationFilter.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';
import { BeneficiaryBalanceListRelationFilterObjectSchema } from './BeneficiaryBalanceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BeneficiaryWhereInputObjectSchema),
        z.lazy(() => BeneficiaryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BeneficiaryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BeneficiaryWhereInputObjectSchema),
        z.lazy(() => BeneficiaryWhereInputObjectSchema).array(),
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
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    secondName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    thirdName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    fourthName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    searchName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    birthDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    genderId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nationality: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nationalID: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    residence: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
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
    subscriberId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    legacyCode: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    relationshipId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isFingerprintVerificationActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isIdCardVerificationActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isFaceVerificationActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isVoiceVerificationActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    gender: z
      .union([
        z.lazy(() => GenderRelationFilterObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    subscriber: z
      .union([
        z.lazy(() => SubscriberRelationFilterObjectSchema),
        z.lazy(() => SubscriberWhereInputObjectSchema),
      ])
      .optional(),
    relationship: z
      .union([
        z.lazy(() => RelationshipRelationFilterObjectSchema),
        z.lazy(() => RelationshipWhereInputObjectSchema),
      ])
      .optional(),
    fingerprint: z
      .lazy(() => FingerprintBiometricListRelationFilterObjectSchema)
      .optional(),
    idCard: z.lazy(() => IDCardListRelationFilterObjectSchema).optional(),
    face: z.lazy(() => FaceBiometricListRelationFilterObjectSchema).optional(),
    voice: z
      .lazy(() => VoiceBiometricListRelationFilterObjectSchema)
      .optional(),
    entryRecords: z
      .lazy(() => EntryRecordListRelationFilterObjectSchema)
      .optional(),
    spents: z
      .lazy(() => BeneficiaryBalanceListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficiaryWhereInputObjectSchema = Schema;
