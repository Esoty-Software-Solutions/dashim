/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FingerTypeEnumRelationFilterObjectSchema } from './FingerTypeEnumRelationFilter.schema';
import { FingerTypeEnumWhereInputObjectSchema } from './FingerTypeEnumWhereInput.schema';
import { BeneficiaryRelationFilterObjectSchema } from './BeneficiaryRelationFilter.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricWhereUniqueInput>;
export const FingerprintBiometricWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        record: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => FingerprintBiometricWhereInputObjectSchema),
                z.lazy(() => FingerprintBiometricWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => FingerprintBiometricWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => FingerprintBiometricWhereInputObjectSchema),
                z.lazy(() => FingerprintBiometricWhereInputObjectSchema).array(),
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
        fingerTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        beneficiaryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        fingerType: z
            .union([
                z.lazy(() => FingerTypeEnumRelationFilterObjectSchema),
                z.lazy(() => FingerTypeEnumWhereInputObjectSchema),
            ])
            .optional(),
        beneficiary: z
            .union([
                z.lazy(() => BeneficiaryRelationFilterObjectSchema),
                z.lazy(() => BeneficiaryWhereInputObjectSchema),
            ])
            .optional(),
        entryRecords: z.lazy(() => EntryRecordListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
