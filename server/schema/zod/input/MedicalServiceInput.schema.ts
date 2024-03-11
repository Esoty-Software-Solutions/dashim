/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { MedicalServiceSelectObjectSchema } from '../objects/MedicalServiceSelect.schema';
import { MedicalServiceIncludeObjectSchema } from '../objects/MedicalServiceInclude.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from '../objects/MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceWhereInputObjectSchema } from '../objects/MedicalServiceWhereInput.schema';
import { MedicalServiceOrderByWithRelationInputObjectSchema } from '../objects/MedicalServiceOrderByWithRelationInput.schema';
import { MedicalServiceScalarFieldEnumSchema } from '../enums/MedicalServiceScalarFieldEnum.schema';
import { MedicalServiceCreateInputObjectSchema } from '../objects/MedicalServiceCreateInput.schema';
import { MedicalServiceUncheckedCreateInputObjectSchema } from '../objects/MedicalServiceUncheckedCreateInput.schema';
import { MedicalServiceCreateManyInputObjectSchema } from '../objects/MedicalServiceCreateManyInput.schema';
import { MedicalServiceUpdateInputObjectSchema } from '../objects/MedicalServiceUpdateInput.schema';
import { MedicalServiceUncheckedUpdateInputObjectSchema } from '../objects/MedicalServiceUncheckedUpdateInput.schema';
import { MedicalServiceUpdateManyMutationInputObjectSchema } from '../objects/MedicalServiceUpdateManyMutationInput.schema';
import { MedicalServiceUncheckedUpdateManyInputObjectSchema } from '../objects/MedicalServiceUncheckedUpdateManyInput.schema';
import { MedicalServiceCountAggregateInputObjectSchema } from '../objects/MedicalServiceCountAggregateInput.schema';
import { MedicalServiceMinAggregateInputObjectSchema } from '../objects/MedicalServiceMinAggregateInput.schema';
import { MedicalServiceMaxAggregateInputObjectSchema } from '../objects/MedicalServiceMaxAggregateInput.schema';
import { MedicalServiceAvgAggregateInputObjectSchema } from '../objects/MedicalServiceAvgAggregateInput.schema';
import { MedicalServiceSumAggregateInputObjectSchema } from '../objects/MedicalServiceSumAggregateInput.schema';
import { MedicalServiceOrderByWithAggregationInputObjectSchema } from '../objects/MedicalServiceOrderByWithAggregationInput.schema';
import { MedicalServiceScalarWhereWithAggregatesInputObjectSchema } from '../objects/MedicalServiceScalarWhereWithAggregatesInput.schema';

type MedicalServiceInputSchemaType = {
    findUnique: z.ZodType<Prisma.MedicalServiceFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.MedicalServiceFindFirstArgs>;
    findMany: z.ZodType<Prisma.MedicalServiceFindManyArgs>;
    create: z.ZodType<Prisma.MedicalServiceCreateArgs>;
    createMany: z.ZodType<Prisma.MedicalServiceCreateManyArgs>;
    delete: z.ZodType<Prisma.MedicalServiceDeleteArgs>;
    deleteMany: z.ZodType<Prisma.MedicalServiceDeleteManyArgs>;
    update: z.ZodType<Prisma.MedicalServiceUpdateArgs>;
    updateMany: z.ZodType<Prisma.MedicalServiceUpdateManyArgs>;
    upsert: z.ZodType<Prisma.MedicalServiceUpsertArgs>;
    aggregate: z.ZodType<Prisma.MedicalServiceAggregateArgs>;
    groupBy: z.ZodType<Prisma.MedicalServiceGroupByArgs>;
    count: z.ZodType<Prisma.MedicalServiceCountArgs>;
};

export const MedicalServiceInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => MedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceIncludeObjectSchema.optional()),
        where: MedicalServiceWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => MedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceIncludeObjectSchema.optional()),
        where: MedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceOrderByWithRelationInputObjectSchema,
                MedicalServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalServiceScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => MedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceIncludeObjectSchema.optional()),
        where: MedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceOrderByWithRelationInputObjectSchema,
                MedicalServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalServiceScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => MedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceIncludeObjectSchema.optional()),
        data: z.union([MedicalServiceCreateInputObjectSchema, MedicalServiceUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([MedicalServiceCreateManyInputObjectSchema, z.array(MedicalServiceCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => MedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceIncludeObjectSchema.optional()),
        where: MedicalServiceWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: MedicalServiceWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => MedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceIncludeObjectSchema.optional()),
        data: z.union([MedicalServiceUpdateInputObjectSchema, MedicalServiceUncheckedUpdateInputObjectSchema]),
        where: MedicalServiceWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            MedicalServiceUpdateManyMutationInputObjectSchema,
            MedicalServiceUncheckedUpdateManyInputObjectSchema,
        ]),
        where: MedicalServiceWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => MedicalServiceSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceIncludeObjectSchema.optional()),
        where: MedicalServiceWhereUniqueInputObjectSchema,
        create: z.union([MedicalServiceCreateInputObjectSchema, MedicalServiceUncheckedCreateInputObjectSchema]),
        update: z.union([MedicalServiceUpdateInputObjectSchema, MedicalServiceUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: MedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceOrderByWithRelationInputObjectSchema,
                MedicalServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), MedicalServiceCountAggregateInputObjectSchema]).optional(),
        _min: MedicalServiceMinAggregateInputObjectSchema.optional(),
        _max: MedicalServiceMaxAggregateInputObjectSchema.optional(),
        _avg: MedicalServiceAvgAggregateInputObjectSchema.optional(),
        _sum: MedicalServiceSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: MedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceOrderByWithAggregationInputObjectSchema,
                MedicalServiceOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: MedicalServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(MedicalServiceScalarFieldEnumSchema),
        _count: z.union([z.literal(true), MedicalServiceCountAggregateInputObjectSchema]).optional(),
        _min: MedicalServiceMinAggregateInputObjectSchema.optional(),
        _max: MedicalServiceMaxAggregateInputObjectSchema.optional(),
        _avg: MedicalServiceAvgAggregateInputObjectSchema.optional(),
        _sum: MedicalServiceSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: MedicalServiceWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceOrderByWithRelationInputObjectSchema,
                MedicalServiceOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalServiceWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalServiceScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), MedicalServiceCountAggregateInputObjectSchema]).optional(),
    }),
} as MedicalServiceInputSchemaType;
