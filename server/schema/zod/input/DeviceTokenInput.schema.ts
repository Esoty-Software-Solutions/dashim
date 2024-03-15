/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { DeviceTokenSelectObjectSchema } from '../objects/DeviceTokenSelect.schema';
import { DeviceTokenIncludeObjectSchema } from '../objects/DeviceTokenInclude.schema';
import { DeviceTokenWhereUniqueInputObjectSchema } from '../objects/DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenWhereInputObjectSchema } from '../objects/DeviceTokenWhereInput.schema';
import { DeviceTokenOrderByWithRelationInputObjectSchema } from '../objects/DeviceTokenOrderByWithRelationInput.schema';
import { DeviceTokenScalarFieldEnumSchema } from '../enums/DeviceTokenScalarFieldEnum.schema';
import { DeviceTokenCreateInputObjectSchema } from '../objects/DeviceTokenCreateInput.schema';
import { DeviceTokenUncheckedCreateInputObjectSchema } from '../objects/DeviceTokenUncheckedCreateInput.schema';
import { DeviceTokenCreateManyInputObjectSchema } from '../objects/DeviceTokenCreateManyInput.schema';
import { DeviceTokenUpdateInputObjectSchema } from '../objects/DeviceTokenUpdateInput.schema';
import { DeviceTokenUncheckedUpdateInputObjectSchema } from '../objects/DeviceTokenUncheckedUpdateInput.schema';
import { DeviceTokenUpdateManyMutationInputObjectSchema } from '../objects/DeviceTokenUpdateManyMutationInput.schema';
import { DeviceTokenUncheckedUpdateManyInputObjectSchema } from '../objects/DeviceTokenUncheckedUpdateManyInput.schema';
import { DeviceTokenCountAggregateInputObjectSchema } from '../objects/DeviceTokenCountAggregateInput.schema';
import { DeviceTokenMinAggregateInputObjectSchema } from '../objects/DeviceTokenMinAggregateInput.schema';
import { DeviceTokenMaxAggregateInputObjectSchema } from '../objects/DeviceTokenMaxAggregateInput.schema';
import { DeviceTokenOrderByWithAggregationInputObjectSchema } from '../objects/DeviceTokenOrderByWithAggregationInput.schema';
import { DeviceTokenScalarWhereWithAggregatesInputObjectSchema } from '../objects/DeviceTokenScalarWhereWithAggregatesInput.schema';

type DeviceTokenInputSchemaType = {
    findUnique: z.ZodType<Prisma.DeviceTokenFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.DeviceTokenFindFirstArgs>;
    findMany: z.ZodType<Prisma.DeviceTokenFindManyArgs>;
    create: z.ZodType<Prisma.DeviceTokenCreateArgs>;
    createMany: z.ZodType<Prisma.DeviceTokenCreateManyArgs>;
    delete: z.ZodType<Prisma.DeviceTokenDeleteArgs>;
    deleteMany: z.ZodType<Prisma.DeviceTokenDeleteManyArgs>;
    update: z.ZodType<Prisma.DeviceTokenUpdateArgs>;
    updateMany: z.ZodType<Prisma.DeviceTokenUpdateManyArgs>;
    upsert: z.ZodType<Prisma.DeviceTokenUpsertArgs>;
    aggregate: z.ZodType<Prisma.DeviceTokenAggregateArgs>;
    groupBy: z.ZodType<Prisma.DeviceTokenGroupByArgs>;
    count: z.ZodType<Prisma.DeviceTokenCountArgs>;
};

export const DeviceTokenInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => DeviceTokenSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTokenIncludeObjectSchema.optional()),
        where: DeviceTokenWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => DeviceTokenSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTokenIncludeObjectSchema.optional()),
        where: DeviceTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTokenOrderByWithRelationInputObjectSchema,
                DeviceTokenOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DeviceTokenScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => DeviceTokenSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTokenIncludeObjectSchema.optional()),
        where: DeviceTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTokenOrderByWithRelationInputObjectSchema,
                DeviceTokenOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DeviceTokenScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => DeviceTokenSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTokenIncludeObjectSchema.optional()),
        data: z.union([DeviceTokenCreateInputObjectSchema, DeviceTokenUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([DeviceTokenCreateManyInputObjectSchema, z.array(DeviceTokenCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => DeviceTokenSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTokenIncludeObjectSchema.optional()),
        where: DeviceTokenWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: DeviceTokenWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => DeviceTokenSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTokenIncludeObjectSchema.optional()),
        data: z.union([DeviceTokenUpdateInputObjectSchema, DeviceTokenUncheckedUpdateInputObjectSchema]),
        where: DeviceTokenWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            DeviceTokenUpdateManyMutationInputObjectSchema,
            DeviceTokenUncheckedUpdateManyInputObjectSchema,
        ]),
        where: DeviceTokenWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => DeviceTokenSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTokenIncludeObjectSchema.optional()),
        where: DeviceTokenWhereUniqueInputObjectSchema,
        create: z.union([DeviceTokenCreateInputObjectSchema, DeviceTokenUncheckedCreateInputObjectSchema]),
        update: z.union([DeviceTokenUpdateInputObjectSchema, DeviceTokenUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: DeviceTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTokenOrderByWithRelationInputObjectSchema,
                DeviceTokenOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), DeviceTokenCountAggregateInputObjectSchema]).optional(),
        _min: DeviceTokenMinAggregateInputObjectSchema.optional(),
        _max: DeviceTokenMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: DeviceTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTokenOrderByWithAggregationInputObjectSchema,
                DeviceTokenOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: DeviceTokenScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(DeviceTokenScalarFieldEnumSchema),
        _count: z.union([z.literal(true), DeviceTokenCountAggregateInputObjectSchema]).optional(),
        _min: DeviceTokenMinAggregateInputObjectSchema.optional(),
        _max: DeviceTokenMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: DeviceTokenWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTokenOrderByWithRelationInputObjectSchema,
                DeviceTokenOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DeviceTokenScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), DeviceTokenCountAggregateInputObjectSchema]).optional(),
    }),
} as DeviceTokenInputSchemaType;
