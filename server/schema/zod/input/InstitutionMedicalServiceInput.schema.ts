/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { InstitutionMedicalServiceSelectObjectSchema } from '../objects/InstitutionMedicalServiceSelect.schema';
import { InstitutionMedicalServiceIncludeObjectSchema } from '../objects/InstitutionMedicalServiceInclude.schema';
import { InstitutionMedicalServiceWhereUniqueInputObjectSchema } from '../objects/InstitutionMedicalServiceWhereUniqueInput.schema';
import { InstitutionMedicalServiceWhereInputObjectSchema } from '../objects/InstitutionMedicalServiceWhereInput.schema';
import { InstitutionMedicalServiceOrderByWithRelationInputObjectSchema } from '../objects/InstitutionMedicalServiceOrderByWithRelationInput.schema';
import { InstitutionMedicalServiceScalarFieldEnumSchema } from '../enums/InstitutionMedicalServiceScalarFieldEnum.schema';
import { InstitutionMedicalServiceCreateInputObjectSchema } from '../objects/InstitutionMedicalServiceCreateInput.schema';
import { InstitutionMedicalServiceUncheckedCreateInputObjectSchema } from '../objects/InstitutionMedicalServiceUncheckedCreateInput.schema';
import { InstitutionMedicalServiceCreateManyInputObjectSchema } from '../objects/InstitutionMedicalServiceCreateManyInput.schema';
import { InstitutionMedicalServiceUpdateInputObjectSchema } from '../objects/InstitutionMedicalServiceUpdateInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateInputObjectSchema } from '../objects/InstitutionMedicalServiceUncheckedUpdateInput.schema';
import { InstitutionMedicalServiceUpdateManyMutationInputObjectSchema } from '../objects/InstitutionMedicalServiceUpdateManyMutationInput.schema';
import { InstitutionMedicalServiceUncheckedUpdateManyInputObjectSchema } from '../objects/InstitutionMedicalServiceUncheckedUpdateManyInput.schema';
import { InstitutionMedicalServiceCountAggregateInputObjectSchema } from '../objects/InstitutionMedicalServiceCountAggregateInput.schema';
import { InstitutionMedicalServiceMinAggregateInputObjectSchema } from '../objects/InstitutionMedicalServiceMinAggregateInput.schema';
import { InstitutionMedicalServiceMaxAggregateInputObjectSchema } from '../objects/InstitutionMedicalServiceMaxAggregateInput.schema';
import { InstitutionMedicalServiceAvgAggregateInputObjectSchema } from '../objects/InstitutionMedicalServiceAvgAggregateInput.schema';
import { InstitutionMedicalServiceSumAggregateInputObjectSchema } from '../objects/InstitutionMedicalServiceSumAggregateInput.schema';
import { InstitutionMedicalServiceOrderByWithAggregationInputObjectSchema } from '../objects/InstitutionMedicalServiceOrderByWithAggregationInput.schema';
import { InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema } from '../objects/InstitutionMedicalServiceScalarWhereWithAggregatesInput.schema';

type InstitutionMedicalServiceInputSchemaType = {
    findUnique: z.ZodType<Prisma.InstitutionMedicalServiceFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.InstitutionMedicalServiceFindFirstArgs>;
    findMany: z.ZodType<Prisma.InstitutionMedicalServiceFindManyArgs>;
    create: z.ZodType<Prisma.InstitutionMedicalServiceCreateArgs>;
    createMany: z.ZodType<Prisma.InstitutionMedicalServiceCreateManyArgs>;
    delete: z.ZodType<Prisma.InstitutionMedicalServiceDeleteArgs>;
    deleteMany: z.ZodType<Prisma.InstitutionMedicalServiceDeleteManyArgs>;
    update: z.ZodType<Prisma.InstitutionMedicalServiceUpdateArgs>;
    updateMany: z.ZodType<Prisma.InstitutionMedicalServiceUpdateManyArgs>;
    upsert: z.ZodType<Prisma.InstitutionMedicalServiceUpsertArgs>;
    aggregate: z.ZodType<Prisma.InstitutionMedicalServiceAggregateArgs>;
    groupBy: z.ZodType<Prisma.InstitutionMedicalServiceGroupByArgs>;
    count: z.ZodType<Prisma.InstitutionMedicalServiceCountArgs>;
};

export const InstitutionMedicalServiceInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => InstitutionMedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionMedicalServiceIncludeObjectSchema.optional()),
        where: InstitutionMedicalServiceWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => InstitutionMedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionMedicalServiceIncludeObjectSchema.optional()),
        where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionMedicalServiceOrderByWithRelationInputObjectSchema,
                InstitutionMedicalServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InstitutionMedicalServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InstitutionMedicalServiceScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => InstitutionMedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionMedicalServiceIncludeObjectSchema.optional()),
        where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionMedicalServiceOrderByWithRelationInputObjectSchema,
                InstitutionMedicalServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InstitutionMedicalServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InstitutionMedicalServiceScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => InstitutionMedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionMedicalServiceIncludeObjectSchema.optional()),
        data: z.union([
            InstitutionMedicalServiceCreateInputObjectSchema,
            InstitutionMedicalServiceUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            InstitutionMedicalServiceCreateManyInputObjectSchema,
            z.array(InstitutionMedicalServiceCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => InstitutionMedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionMedicalServiceIncludeObjectSchema.optional()),
        where: InstitutionMedicalServiceWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: InstitutionMedicalServiceWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => InstitutionMedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionMedicalServiceIncludeObjectSchema.optional()),
        data: z.union([
            InstitutionMedicalServiceUpdateInputObjectSchema,
            InstitutionMedicalServiceUncheckedUpdateInputObjectSchema,
        ]),
        where: InstitutionMedicalServiceWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            InstitutionMedicalServiceUpdateManyMutationInputObjectSchema,
            InstitutionMedicalServiceUncheckedUpdateManyInputObjectSchema,
        ]),
        where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => InstitutionMedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => InstitutionMedicalServiceIncludeObjectSchema.optional()),
        where: InstitutionMedicalServiceWhereUniqueInputObjectSchema,
        create: z.union([
            InstitutionMedicalServiceCreateInputObjectSchema,
            InstitutionMedicalServiceUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            InstitutionMedicalServiceUpdateInputObjectSchema,
            InstitutionMedicalServiceUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionMedicalServiceOrderByWithRelationInputObjectSchema,
                InstitutionMedicalServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InstitutionMedicalServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), InstitutionMedicalServiceCountAggregateInputObjectSchema]).optional(),
        _min: InstitutionMedicalServiceMinAggregateInputObjectSchema.optional(),
        _max: InstitutionMedicalServiceMaxAggregateInputObjectSchema.optional(),
        _avg: InstitutionMedicalServiceAvgAggregateInputObjectSchema.optional(),
        _sum: InstitutionMedicalServiceSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionMedicalServiceOrderByWithAggregationInputObjectSchema,
                InstitutionMedicalServiceOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: InstitutionMedicalServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(InstitutionMedicalServiceScalarFieldEnumSchema),
        _count: z.union([z.literal(true), InstitutionMedicalServiceCountAggregateInputObjectSchema]).optional(),
        _min: InstitutionMedicalServiceMinAggregateInputObjectSchema.optional(),
        _max: InstitutionMedicalServiceMaxAggregateInputObjectSchema.optional(),
        _avg: InstitutionMedicalServiceAvgAggregateInputObjectSchema.optional(),
        _sum: InstitutionMedicalServiceSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: InstitutionMedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InstitutionMedicalServiceOrderByWithRelationInputObjectSchema,
                InstitutionMedicalServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InstitutionMedicalServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InstitutionMedicalServiceScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), InstitutionMedicalServiceCountAggregateInputObjectSchema]).optional(),
    }),
} as InstitutionMedicalServiceInputSchemaType;
