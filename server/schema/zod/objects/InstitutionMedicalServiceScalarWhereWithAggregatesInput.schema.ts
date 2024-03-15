/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceScalarWhereWithAggregatesInput>;
export const InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema: SchemaType = z
    .object({
        AND: z
            .union([
                z.lazy(() => InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema).array(),
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
        institutionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        medicalServiceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        basePrice: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    })
    .strict() as SchemaType;
