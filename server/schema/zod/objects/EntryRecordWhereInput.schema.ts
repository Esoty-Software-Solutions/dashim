/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableRelationFilterObjectSchema } from './UserNullableRelationFilter.schema';
import { BeneficiaryRelationFilterObjectSchema } from './BeneficiaryRelationFilter.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { FingerprintBiometricNullableRelationFilterObjectSchema } from './FingerprintBiometricNullableRelationFilter.schema';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';
import { IDCardNullableRelationFilterObjectSchema } from './IDCardNullableRelationFilter.schema';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';
import { FaceBiometricNullableRelationFilterObjectSchema } from './FaceBiometricNullableRelationFilter.schema';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';
import { VoiceBiometricNullableRelationFilterObjectSchema } from './VoiceBiometricNullableRelationFilter.schema';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';
import { MedicalCenterRelationFilterObjectSchema } from './MedicalCenterRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { BeneficiaryServiceListRelationFilterObjectSchema } from './BeneficiaryServiceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordWhereInput>;
export const EntryRecordWhereInputObjectSchema: SchemaType = z
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
        id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        updatedById: z
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
        isValidated: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isManuallyInserted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        notes: z.lazy(() => JsonFilterObjectSchema).optional(),
        beneficiaryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        fingerprintId: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        idCardId: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        faceId: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        voiceId: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        medicalCenterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        CreatedBy: z
            .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
            .optional(),
        UpdatedBy: z
            .union([
                z.lazy(() => UserNullableRelationFilterObjectSchema),
                z.lazy(() => UserWhereInputObjectSchema),
                z.null(),
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
                z.lazy(() => FingerprintBiometricNullableRelationFilterObjectSchema),
                z.lazy(() => FingerprintBiometricWhereInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        idCardBiometric: z
            .union([
                z.lazy(() => IDCardNullableRelationFilterObjectSchema),
                z.lazy(() => IDCardWhereInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        faceBiometric: z
            .union([
                z.lazy(() => FaceBiometricNullableRelationFilterObjectSchema),
                z.lazy(() => FaceBiometricWhereInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        voiceBiometric: z
            .union([
                z.lazy(() => VoiceBiometricNullableRelationFilterObjectSchema),
                z.lazy(() => VoiceBiometricWhereInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        medicalCenter: z
            .union([
                z.lazy(() => MedicalCenterRelationFilterObjectSchema),
                z.lazy(() => MedicalCenterWhereInputObjectSchema),
            ])
            .optional(),
        beneficiaryServices: z.lazy(() => BeneficiaryServiceListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
