/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { MedicalCenterSelectObjectSchema } from '../objects/MedicalCenterSelect.schema';
import { MedicalCenterIncludeObjectSchema } from '../objects/MedicalCenterInclude.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from '../objects/MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterWhereInputObjectSchema } from '../objects/MedicalCenterWhereInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from '../objects/MedicalCenterOrderByWithRelationInput.schema';
import { MedicalCenterScalarFieldEnumSchema } from '../enums/MedicalCenterScalarFieldEnum.schema';
import { MedicalCenterCreateInputObjectSchema } from '../objects/MedicalCenterCreateInput.schema';
import { MedicalCenterUncheckedCreateInputObjectSchema } from '../objects/MedicalCenterUncheckedCreateInput.schema';
import { MedicalCenterCreateManyInputObjectSchema } from '../objects/MedicalCenterCreateManyInput.schema';
import { MedicalCenterUpdateInputObjectSchema } from '../objects/MedicalCenterUpdateInput.schema';
import { MedicalCenterUncheckedUpdateInputObjectSchema } from '../objects/MedicalCenterUncheckedUpdateInput.schema';
import { MedicalCenterUpdateManyMutationInputObjectSchema } from '../objects/MedicalCenterUpdateManyMutationInput.schema';
import { MedicalCenterUncheckedUpdateManyInputObjectSchema } from '../objects/MedicalCenterUncheckedUpdateManyInput.schema';
import { MedicalCenterCountAggregateInputObjectSchema } from '../objects/MedicalCenterCountAggregateInput.schema';
import { MedicalCenterMinAggregateInputObjectSchema } from '../objects/MedicalCenterMinAggregateInput.schema';
import { MedicalCenterMaxAggregateInputObjectSchema } from '../objects/MedicalCenterMaxAggregateInput.schema';
import { MedicalCenterAvgAggregateInputObjectSchema } from '../objects/MedicalCenterAvgAggregateInput.schema';
import { MedicalCenterSumAggregateInputObjectSchema } from '../objects/MedicalCenterSumAggregateInput.schema';
import { MedicalCenterOrderByWithAggregationInputObjectSchema } from '../objects/MedicalCenterOrderByWithAggregationInput.schema';
import { MedicalCenterScalarWhereWithAggregatesInputObjectSchema } from '../objects/MedicalCenterScalarWhereWithAggregatesInput.schema';

type MedicalCenterInputSchemaType = {
    findUnique: z.ZodType<Prisma.MedicalCenterFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.MedicalCenterFindFirstArgs>;
    findMany: z.ZodType<Prisma.MedicalCenterFindManyArgs>;
    create: z.ZodType<Prisma.MedicalCenterCreateArgs>;
    createMany: z.ZodType<Prisma.MedicalCenterCreateManyArgs>;
    delete: z.ZodType<Prisma.MedicalCenterDeleteArgs>;
    deleteMany: z.ZodType<Prisma.MedicalCenterDeleteManyArgs>;
    update: z.ZodType<Prisma.MedicalCenterUpdateArgs>;
    updateMany: z.ZodType<Prisma.MedicalCenterUpdateManyArgs>;
    upsert: z.ZodType<Prisma.MedicalCenterUpsertArgs>;
    aggregate: z.ZodType<Prisma.MedicalCenterAggregateArgs>;
    groupBy: z.ZodType<Prisma.MedicalCenterGroupByArgs>;
    count: z.ZodType<Prisma.MedicalCenterCountArgs>;
};

export const MedicalCenterInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => MedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalCenterIncludeObjectSchema.optional()),
        where: MedicalCenterWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => MedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalCenterIncludeObjectSchema.optional()),
        where: MedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalCenterOrderByWithRelationInputObjectSchema,
                MedicalCenterOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalCenterScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => MedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalCenterIncludeObjectSchema.optional()),
        where: MedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalCenterOrderByWithRelationInputObjectSchema,
                MedicalCenterOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalCenterScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => MedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalCenterIncludeObjectSchema.optional()),
        data: z.union([MedicalCenterCreateInputObjectSchema, MedicalCenterUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([MedicalCenterCreateManyInputObjectSchema, z.array(MedicalCenterCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => MedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalCenterIncludeObjectSchema.optional()),
        where: MedicalCenterWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: MedicalCenterWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => MedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalCenterIncludeObjectSchema.optional()),
        data: z.union([MedicalCenterUpdateInputObjectSchema, MedicalCenterUncheckedUpdateInputObjectSchema]),
        where: MedicalCenterWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            MedicalCenterUpdateManyMutationInputObjectSchema,
            MedicalCenterUncheckedUpdateManyInputObjectSchema,
        ]),
        where: MedicalCenterWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => MedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => MedicalCenterIncludeObjectSchema.optional()),
        where: MedicalCenterWhereUniqueInputObjectSchema,
        create: z.union([MedicalCenterCreateInputObjectSchema, MedicalCenterUncheckedCreateInputObjectSchema]),
        update: z.union([MedicalCenterUpdateInputObjectSchema, MedicalCenterUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: MedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalCenterOrderByWithRelationInputObjectSchema,
                MedicalCenterOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), MedicalCenterCountAggregateInputObjectSchema]).optional(),
        _min: MedicalCenterMinAggregateInputObjectSchema.optional(),
        _max: MedicalCenterMaxAggregateInputObjectSchema.optional(),
        _avg: MedicalCenterAvgAggregateInputObjectSchema.optional(),
        _sum: MedicalCenterSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: MedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalCenterOrderByWithAggregationInputObjectSchema,
                MedicalCenterOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: MedicalCenterScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(MedicalCenterScalarFieldEnumSchema),
        _count: z.union([z.literal(true), MedicalCenterCountAggregateInputObjectSchema]).optional(),
        _min: MedicalCenterMinAggregateInputObjectSchema.optional(),
        _max: MedicalCenterMaxAggregateInputObjectSchema.optional(),
        _avg: MedicalCenterAvgAggregateInputObjectSchema.optional(),
        _sum: MedicalCenterSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: MedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalCenterOrderByWithRelationInputObjectSchema,
                MedicalCenterOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalCenterScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), MedicalCenterCountAggregateInputObjectSchema]).optional(),
    }),
} as MedicalCenterInputSchemaType;
