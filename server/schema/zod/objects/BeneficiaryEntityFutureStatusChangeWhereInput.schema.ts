/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableRelationFilterObjectSchema } from './UserNullableRelationFilter.schema';
import { BeneficiaryEntityRelationFilterObjectSchema } from './BeneficiaryEntityRelationFilter.schema';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeWhereInput>;
export const BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema).array(),
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
        changeDate: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        futureStatus: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        beneficiaryEntityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
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
        beneficiaryEntity: z
            .union([
                z.lazy(() => BeneficiaryEntityRelationFilterObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
