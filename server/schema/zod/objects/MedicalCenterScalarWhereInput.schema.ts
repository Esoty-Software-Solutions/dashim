/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterScalarWhereInput>;
export const MedicalCenterScalarWhereInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => MedicalCenterScalarWhereInputObjectSchema),
                z.lazy(() => MedicalCenterScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => MedicalCenterScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => MedicalCenterScalarWhereInputObjectSchema),
                z.lazy(() => MedicalCenterScalarWhereInputObjectSchema).array(),
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
        cityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        address: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        phone: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
        email: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
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
        managingTenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    })
    .strict() as SchemaType;
