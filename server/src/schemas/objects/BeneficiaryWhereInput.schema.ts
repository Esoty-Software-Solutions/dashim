import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { GenderRelationFilterObjectSchema } from './GenderRelationFilter.schema';
import { GenderWhereInputObjectSchema } from './GenderWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { BeneficiaryEntityRelationFilterObjectSchema } from './BeneficiaryEntityRelationFilter.schema';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';
import { RelationshipRelationFilterObjectSchema } from './RelationshipRelationFilter.schema';
import { RelationshipWhereInputObjectSchema } from './RelationshipWhereInput.schema';
import { FingerprintBiometricListRelationFilterObjectSchema } from './FingerprintBiometricListRelationFilter.schema';
import { IDCardListRelationFilterObjectSchema } from './IDCardListRelationFilter.schema';
import { FaceBiometricListRelationFilterObjectSchema } from './FaceBiometricListRelationFilter.schema';
import { VoiceBiometricListRelationFilterObjectSchema } from './VoiceBiometricListRelationFilter.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';
import { BeneficiaryBalanceListRelationFilterObjectSchema } from './BeneficiaryBalanceListRelationFilter.schema';
import { BeneficiaryFutureStatusChangeListRelationFilterObjectSchema } from './BeneficiaryFutureStatusChangeListRelationFilter.schema';

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
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    nationality: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nationalID: z
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
    statusSetById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneficiaryEntityId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    legacyCode: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    relationshipId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    gender: z
      .union([
        z.lazy(() => GenderRelationFilterObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema),
      ])
      .optional(),
    StatusSetBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    beneficiaryEntity: z
      .union([
        z.lazy(() => BeneficiaryEntityRelationFilterObjectSchema),
        z.lazy(() => BeneficiaryEntityWhereInputObjectSchema),
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
    beneficiaryBalances: z
      .lazy(() => BeneficiaryBalanceListRelationFilterObjectSchema)
      .optional(),
    futureStatus: z
      .lazy(() => BeneficiaryFutureStatusChangeListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficiaryWhereInputObjectSchema = Schema;
