/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { TenantMemberSelectObjectSchema } from '../objects/TenantMemberSelect.schema';
import { TenantMemberIncludeObjectSchema } from '../objects/TenantMemberInclude.schema';
import { TenantMemberWhereUniqueInputObjectSchema } from '../objects/TenantMemberWhereUniqueInput.schema';
import { TenantMemberWhereInputObjectSchema } from '../objects/TenantMemberWhereInput.schema';
import { TenantMemberOrderByWithRelationInputObjectSchema } from '../objects/TenantMemberOrderByWithRelationInput.schema';
import { TenantMemberScalarFieldEnumSchema } from '../enums/TenantMemberScalarFieldEnum.schema';
import { TenantMemberCreateInputObjectSchema } from '../objects/TenantMemberCreateInput.schema';
import { TenantMemberUncheckedCreateInputObjectSchema } from '../objects/TenantMemberUncheckedCreateInput.schema';
import { TenantMemberCreateManyInputObjectSchema } from '../objects/TenantMemberCreateManyInput.schema';
import { TenantMemberUpdateInputObjectSchema } from '../objects/TenantMemberUpdateInput.schema';
import { TenantMemberUncheckedUpdateInputObjectSchema } from '../objects/TenantMemberUncheckedUpdateInput.schema';
import { TenantMemberUpdateManyMutationInputObjectSchema } from '../objects/TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberUncheckedUpdateManyInputObjectSchema } from '../objects/TenantMemberUncheckedUpdateManyInput.schema';
import { TenantMemberCountAggregateInputObjectSchema } from '../objects/TenantMemberCountAggregateInput.schema';
import { TenantMemberMinAggregateInputObjectSchema } from '../objects/TenantMemberMinAggregateInput.schema';
import { TenantMemberMaxAggregateInputObjectSchema } from '../objects/TenantMemberMaxAggregateInput.schema';
import { TenantMemberOrderByWithAggregationInputObjectSchema } from '../objects/TenantMemberOrderByWithAggregationInput.schema';
import { TenantMemberScalarWhereWithAggregatesInputObjectSchema } from '../objects/TenantMemberScalarWhereWithAggregatesInput.schema';

type TenantMemberInputSchemaType = {
    findUnique: z.ZodType<Prisma.TenantMemberFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.TenantMemberFindFirstArgs>;
    findMany: z.ZodType<Prisma.TenantMemberFindManyArgs>;
    create: z.ZodType<Prisma.TenantMemberCreateArgs>;
    createMany: z.ZodType<Prisma.TenantMemberCreateManyArgs>;
    delete: z.ZodType<Prisma.TenantMemberDeleteArgs>;
    deleteMany: z.ZodType<Prisma.TenantMemberDeleteManyArgs>;
    update: z.ZodType<Prisma.TenantMemberUpdateArgs>;
    updateMany: z.ZodType<Prisma.TenantMemberUpdateManyArgs>;
    upsert: z.ZodType<Prisma.TenantMemberUpsertArgs>;
    aggregate: z.ZodType<Prisma.TenantMemberAggregateArgs>;
    groupBy: z.ZodType<Prisma.TenantMemberGroupByArgs>;
    count: z.ZodType<Prisma.TenantMemberCountArgs>;
};

export const TenantMemberInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => TenantMemberSelectObjectSchema.optional()),
        include: z.lazy(() => TenantMemberIncludeObjectSchema.optional()),
        where: TenantMemberWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => TenantMemberSelectObjectSchema.optional()),
        include: z.lazy(() => TenantMemberIncludeObjectSchema.optional()),
        where: TenantMemberWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantMemberOrderByWithRelationInputObjectSchema,
                TenantMemberOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: TenantMemberWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantMemberScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => TenantMemberSelectObjectSchema.optional()),
        include: z.lazy(() => TenantMemberIncludeObjectSchema.optional()),
        where: TenantMemberWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantMemberOrderByWithRelationInputObjectSchema,
                TenantMemberOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: TenantMemberWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantMemberScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => TenantMemberSelectObjectSchema.optional()),
        include: z.lazy(() => TenantMemberIncludeObjectSchema.optional()),
        data: z.union([TenantMemberCreateInputObjectSchema, TenantMemberUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([TenantMemberCreateManyInputObjectSchema, z.array(TenantMemberCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => TenantMemberSelectObjectSchema.optional()),
        include: z.lazy(() => TenantMemberIncludeObjectSchema.optional()),
        where: TenantMemberWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: TenantMemberWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => TenantMemberSelectObjectSchema.optional()),
        include: z.lazy(() => TenantMemberIncludeObjectSchema.optional()),
        data: z.union([TenantMemberUpdateInputObjectSchema, TenantMemberUncheckedUpdateInputObjectSchema]),
        where: TenantMemberWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            TenantMemberUpdateManyMutationInputObjectSchema,
            TenantMemberUncheckedUpdateManyInputObjectSchema,
        ]),
        where: TenantMemberWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => TenantMemberSelectObjectSchema.optional()),
        include: z.lazy(() => TenantMemberIncludeObjectSchema.optional()),
        where: TenantMemberWhereUniqueInputObjectSchema,
        create: z.union([TenantMemberCreateInputObjectSchema, TenantMemberUncheckedCreateInputObjectSchema]),
        update: z.union([TenantMemberUpdateInputObjectSchema, TenantMemberUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: TenantMemberWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantMemberOrderByWithRelationInputObjectSchema,
                TenantMemberOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: TenantMemberWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), TenantMemberCountAggregateInputObjectSchema]).optional(),
        _min: TenantMemberMinAggregateInputObjectSchema.optional(),
        _max: TenantMemberMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: TenantMemberWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantMemberOrderByWithAggregationInputObjectSchema,
                TenantMemberOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: TenantMemberScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(TenantMemberScalarFieldEnumSchema),
        _count: z.union([z.literal(true), TenantMemberCountAggregateInputObjectSchema]).optional(),
        _min: TenantMemberMinAggregateInputObjectSchema.optional(),
        _max: TenantMemberMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: TenantMemberWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantMemberOrderByWithRelationInputObjectSchema,
                TenantMemberOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: TenantMemberWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantMemberScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), TenantMemberCountAggregateInputObjectSchema]).optional(),
    }),
} as TenantMemberInputSchemaType;
