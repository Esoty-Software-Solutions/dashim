/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInput.schema';
import { BeneficiaryFutureStatusChangeWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableRelationFilterObjectSchema } from './UserNullableRelationFilter.schema';
import { BeneficiaryRelationFilterObjectSchema } from './BeneficiaryRelationFilter.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeWhereUniqueInput>;
export const BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        beneficiaryId_changeDate: z
            .lazy(() => BeneficiaryFutureStatusChangeBeneficiaryIdChangeDateCompoundUniqueInputObjectSchema)
            .optional(),
        AND: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeWhereInputObjectSchema).array(),
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
        createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        updatedById: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        changeDate: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        futureStatus: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        beneficiaryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
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
    })
    .strict() as SchemaType;
