/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyMedicalCenterScalarWhereWithAggregatesInput>;
export const InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema).array(),
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
        insurancePolicyId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        medicalCenterId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    })
    .strict() as SchemaType;
