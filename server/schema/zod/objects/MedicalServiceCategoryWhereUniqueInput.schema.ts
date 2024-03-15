/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BenefitPackageMedicalServiceCategoryListRelationFilterObjectSchema } from './BenefitPackageMedicalServiceCategoryListRelationFilter.schema';
import { MedicalServiceListRelationFilterObjectSchema } from './MedicalServiceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryWhereUniqueInput>;
export const MedicalServiceCategoryWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => MedicalServiceCategoryWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema),
                z.lazy(() => MedicalServiceCategoryWhereInputObjectSchema).array(),
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
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        dalilCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        basePrice: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        IsPriceVaried: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        beneftiPackages: z.lazy(() => BenefitPackageMedicalServiceCategoryListRelationFilterObjectSchema).optional(),
        services: z.lazy(() => MedicalServiceListRelationFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
