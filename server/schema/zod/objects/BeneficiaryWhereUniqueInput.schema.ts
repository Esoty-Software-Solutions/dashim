/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInputObjectSchema } from './BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { GenderEnumRelationFilterObjectSchema } from './GenderEnumRelationFilter.schema';
import { GenderEnumWhereInputObjectSchema } from './GenderEnumWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { BeneficiaryEntityRelationFilterObjectSchema } from './BeneficiaryEntityRelationFilter.schema';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';
import { RelationshipEnumRelationFilterObjectSchema } from './RelationshipEnumRelationFilter.schema';
import { RelationshipEnumWhereInputObjectSchema } from './RelationshipEnumWhereInput.schema';
import { FingerprintBiometricListRelationFilterObjectSchema } from './FingerprintBiometricListRelationFilter.schema';
import { IDCardListRelationFilterObjectSchema } from './IDCardListRelationFilter.schema';
import { FaceBiometricListRelationFilterObjectSchema } from './FaceBiometricListRelationFilter.schema';
import { VoiceBiometricListRelationFilterObjectSchema } from './VoiceBiometricListRelationFilter.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';
import { BeneficiaryBalanceListRelationFilterObjectSchema } from './BeneficiaryBalanceListRelationFilter.schema';
import { BeneficiaryFutureStatusChangeListRelationFilterObjectSchema } from './BeneficiaryFutureStatusChangeListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryWhereUniqueInput>;
export const BeneficiaryWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        beneficiaryEntityId_id: z
            .lazy(() => BeneficiaryBeneficiaryEntityIdIdCompoundUniqueInputObjectSchema)
            .optional(),
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
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        secondName: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        thirdName: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        fourthName: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        searchName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        birthDate: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        genderId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        nationality: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        nationalID: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        deactivationReason: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        deactivationDate: z
            .union([
                z.lazy(() => DateTimeNullableFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
                z.null(),
            ])
            .optional()
            .nullable(),
        statusSetById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        beneficiaryEntityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        legacyCode: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        relationshipId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        gender: z
            .union([z.lazy(() => GenderEnumRelationFilterObjectSchema), z.lazy(() => GenderEnumWhereInputObjectSchema)])
            .optional(),
        StatusSetBy: z
            .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
            .optional(),
        beneficiaryEntity: z
            .union([
                z.lazy(() => BeneficiaryEntityRelationFilterObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereInputObjectSchema),
            ])
            .optional(),
        relationship: z
            .union([
                z.lazy(() => RelationshipEnumRelationFilterObjectSchema),
                z.lazy(() => RelationshipEnumWhereInputObjectSchema),
            ])
            .optional(),
        fingerprint: z.lazy(() => FingerprintBiometricListRelationFilterObjectSchema).optional(),
        idCard: z.lazy(() => IDCardListRelationFilterObjectSchema).optional(),
        face: z.lazy(() => FaceBiometricListRelationFilterObjectSchema).optional(),
        voice: z.lazy(() => VoiceBiometricListRelationFilterObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordListRelationFilterObjectSchema).optional(),
        beneficiaryBalances: z.lazy(() => BeneficiaryBalanceListRelationFilterObjectSchema).optional(),
        futureStatus: z.lazy(() => BeneficiaryFutureStatusChangeListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
