/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BeneficiaryRelationFilterObjectSchema } from './BeneficiaryRelationFilter.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricWhereInput>;
export const VoiceBiometricWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => VoiceBiometricWhereInputObjectSchema),
                z.lazy(() => VoiceBiometricWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => VoiceBiometricWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => VoiceBiometricWhereInputObjectSchema),
                z.lazy(() => VoiceBiometricWhereInputObjectSchema).array(),
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
        record: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        beneficiaryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        beneficiary: z
            .union([
                z.lazy(() => BeneficiaryRelationFilterObjectSchema),
                z.lazy(() => BeneficiaryWhereInputObjectSchema),
            ])
            .optional(),
        entryRecords: z.lazy(() => EntryRecordListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
