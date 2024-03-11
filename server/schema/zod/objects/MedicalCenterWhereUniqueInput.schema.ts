/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { CityEnumRelationFilterObjectSchema } from './CityEnumRelationFilter.schema';
import { CityEnumWhereInputObjectSchema } from './CityEnumWhereInput.schema';
import { TenantRelationFilterObjectSchema } from './TenantRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { MedicalServiceListRelationFilterObjectSchema } from './MedicalServiceListRelationFilter.schema';
import { InsurancePolicyMedicalCenterListRelationFilterObjectSchema } from './InsurancePolicyMedicalCenterListRelationFilter.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterWhereUniqueInput>;
export const MedicalCenterWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        phone: z.string().array().optional(),
        email: z.string().array().optional(),
        managingTenantId: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => MedicalCenterWhereInputObjectSchema),
                z.lazy(() => MedicalCenterWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => MedicalCenterWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => MedicalCenterWhereInputObjectSchema),
                z.lazy(() => MedicalCenterWhereInputObjectSchema).array(),
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
        code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
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
        managingTenant: z
            .union([z.lazy(() => TenantRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)])
            .optional(),
        services: z.lazy(() => MedicalServiceListRelationFilterObjectSchema).optional(),
        insurancePolicy: z.lazy(() => InsurancePolicyMedicalCenterListRelationFilterObjectSchema).optional(),
        entryRecords: z.lazy(() => EntryRecordListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
