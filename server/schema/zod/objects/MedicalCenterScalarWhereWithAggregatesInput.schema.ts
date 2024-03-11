/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterScalarWhereWithAggregatesInput>;
export const MedicalCenterScalarWhereWithAggregatesInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => MedicalCenterScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => MedicalCenterScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => MedicalCenterScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => MedicalCenterScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => MedicalCenterScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        createdAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
            ])
            .optional(),
        updatedAt: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
            ])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
        isActive: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
        deactivationReason: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        deactivationDate: z
            .union([
                z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
                z.union([z.date(), z.string().datetime().optional()]),
                z.null(),
            ])
            .optional()
            .nullable(),
        cityId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        address: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string(), z.null()])
            .optional()
            .nullable(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        phone: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
        email: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
        website: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        facebookLink: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        googleMapsLink: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        twitterLink: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        instagramLink: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        latitude: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number(), z.null()])
            .optional()
            .nullable(),
        longitude: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number(), z.null()])
            .optional()
            .nullable(),
        managingTenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    })
    .strict() as SchemaType;
