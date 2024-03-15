/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableRelationFilterObjectSchema } from './UserNullableRelationFilter.schema';
import { BeneficiaryServiceNullableRelationFilterObjectSchema } from './BeneficiaryServiceNullableRelationFilter.schema';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';
import { ReviewStatusEnumRelationFilterObjectSchema } from './ReviewStatusEnumRelationFilter.schema';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusWhereUniqueInput>;
export const ReviewStatusWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => ReviewStatusWhereInputObjectSchema),
                z.lazy(() => ReviewStatusWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ReviewStatusWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ReviewStatusWhereInputObjectSchema),
                z.lazy(() => ReviewStatusWhereInputObjectSchema).array(),
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
        transactionReviewStatusId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        medicalReviewStatusId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
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
        beneficiaryService: z
            .union([
                z.lazy(() => BeneficiaryServiceNullableRelationFilterObjectSchema),
                z.lazy(() => BeneficiaryServiceWhereInputObjectSchema),
                z.null(),
            ])
            .optional()
            .nullable(),
        transactionReviewStatus: z
            .union([
                z.lazy(() => ReviewStatusEnumRelationFilterObjectSchema),
                z.lazy(() => ReviewStatusEnumWhereInputObjectSchema),
            ])
            .optional(),
        medicalReviewStatus: z
            .union([
                z.lazy(() => ReviewStatusEnumRelationFilterObjectSchema),
                z.lazy(() => ReviewStatusEnumWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
