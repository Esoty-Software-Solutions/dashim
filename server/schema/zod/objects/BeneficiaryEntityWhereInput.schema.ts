/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CityEnumRelationFilterObjectSchema } from './CityEnumRelationFilter.schema';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';
import { InsurancePolicyRelationFilterObjectSchema } from './InsurancePolicyRelationFilter.schema';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';
import { BeneficiaryListRelationFilterObjectSchema } from './BeneficiaryListRelationFilter.schema';
import { BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema } from './BeneficiaryEntityFutureStatusChangeListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityWhereInput>;
export const BeneficiaryEntityWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => BeneficiaryEntityWhereInputObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BeneficiaryEntityWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BeneficiaryEntityWhereInputObjectSchema),
                z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).array(),
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
        statusSetById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        cityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        address: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        insurancePolicyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        StatusSetBy: z
            .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
            .optional(),
        city: z
            .union([z.lazy(() => CityEnumRelationFilterObjectSchema), z.lazy(() => CityEnumWhereInputObjectSchema)])
            .optional(),
        insurancePolicy: z
            .union([
                z.lazy(() => InsurancePolicyRelationFilterObjectSchema),
                z.lazy(() => InsurancePolicyWhereInputObjectSchema),
            ])
            .optional(),
        beneficiaries: z.lazy(() => BeneficiaryListRelationFilterObjectSchema).optional(),
        futureStatus: z.lazy(() => BeneficiaryEntityFutureStatusChangeListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
