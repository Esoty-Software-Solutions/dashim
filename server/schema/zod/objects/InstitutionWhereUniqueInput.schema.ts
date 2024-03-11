/* eslint-disable */
import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { CityEnumRelationFilterObjectSchema } from './CityEnumRelationFilter.schema';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';
import { InsurancePolicyListRelationFilterObjectSchema } from './InsurancePolicyListRelationFilter.schema';
import { InstitutionMedicalServiceListRelationFilterObjectSchema } from './InstitutionMedicalServiceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionWhereUniqueInput>;
export const InstitutionWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        code: z.string().optional(),
        phoneArray: z.string().array().optional(),
        emailArray: z.string().array().optional(),
        AND: z
            .union([
                z.lazy(() => InstitutionWhereInputObjectSchema),
                z.lazy(() => InstitutionWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => InstitutionWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InstitutionWhereInputObjectSchema),
                z.lazy(() => InstitutionWhereInputObjectSchema).array(),
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
        cityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        address: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        legacyCode: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        website: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        facebookLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        googleMapsLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        twitterLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        instagramLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        latitude: z
            .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number(), z.null()])
            .optional()
            .nullable(),
        longitude: z
            .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number(), z.null()])
            .optional()
            .nullable(),
        city: z
            .union([z.lazy(() => CityEnumRelationFilterObjectSchema), z.lazy(() => CityEnumWhereInputObjectSchema)])
            .optional(),
        policies: z.lazy(() => InsurancePolicyListRelationFilterObjectSchema).optional(),
        MedicalCenterPricing: z.lazy(() => InstitutionMedicalServiceListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
