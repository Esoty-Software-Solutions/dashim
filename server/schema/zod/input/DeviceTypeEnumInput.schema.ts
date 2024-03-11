/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { DeviceTypeEnumSelectObjectSchema } from '../objects/DeviceTypeEnumSelect.schema';
import { DeviceTypeEnumIncludeObjectSchema } from '../objects/DeviceTypeEnumInclude.schema';
import { DeviceTypeEnumWhereUniqueInputObjectSchema } from '../objects/DeviceTypeEnumWhereUniqueInput.schema';
import { DeviceTypeEnumWhereInputObjectSchema } from '../objects/DeviceTypeEnumWhereInput.schema';
import { DeviceTypeEnumOrderByWithRelationInputObjectSchema } from '../objects/DeviceTypeEnumOrderByWithRelationInput.schema';
import { DeviceTypeEnumScalarFieldEnumSchema } from '../enums/DeviceTypeEnumScalarFieldEnum.schema';
import { DeviceTypeEnumCreateInputObjectSchema } from '../objects/DeviceTypeEnumCreateInput.schema';
import { DeviceTypeEnumUncheckedCreateInputObjectSchema } from '../objects/DeviceTypeEnumUncheckedCreateInput.schema';
import { DeviceTypeEnumCreateManyInputObjectSchema } from '../objects/DeviceTypeEnumCreateManyInput.schema';
import { DeviceTypeEnumUpdateInputObjectSchema } from '../objects/DeviceTypeEnumUpdateInput.schema';
import { DeviceTypeEnumUncheckedUpdateInputObjectSchema } from '../objects/DeviceTypeEnumUncheckedUpdateInput.schema';
import { DeviceTypeEnumUpdateManyMutationInputObjectSchema } from '../objects/DeviceTypeEnumUpdateManyMutationInput.schema';
import { DeviceTypeEnumUncheckedUpdateManyInputObjectSchema } from '../objects/DeviceTypeEnumUncheckedUpdateManyInput.schema';
import { DeviceTypeEnumCountAggregateInputObjectSchema } from '../objects/DeviceTypeEnumCountAggregateInput.schema';
import { DeviceTypeEnumMinAggregateInputObjectSchema } from '../objects/DeviceTypeEnumMinAggregateInput.schema';
import { DeviceTypeEnumMaxAggregateInputObjectSchema } from '../objects/DeviceTypeEnumMaxAggregateInput.schema';
import { DeviceTypeEnumOrderByWithAggregationInputObjectSchema } from '../objects/DeviceTypeEnumOrderByWithAggregationInput.schema';
import { DeviceTypeEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/DeviceTypeEnumScalarWhereWithAggregatesInput.schema';

type DeviceTypeEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.DeviceTypeEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.DeviceTypeEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.DeviceTypeEnumFindManyArgs>;
    create: z.ZodType<Prisma.DeviceTypeEnumCreateArgs>;
    createMany: z.ZodType<Prisma.DeviceTypeEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.DeviceTypeEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.DeviceTypeEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.DeviceTypeEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.DeviceTypeEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.DeviceTypeEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.DeviceTypeEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.DeviceTypeEnumGroupByArgs>;
    count: z.ZodType<Prisma.DeviceTypeEnumCountArgs>;
};

export const DeviceTypeEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => DeviceTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTypeEnumIncludeObjectSchema.optional()),
        where: DeviceTypeEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => DeviceTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTypeEnumIncludeObjectSchema.optional()),
        where: DeviceTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTypeEnumOrderByWithRelationInputObjectSchema,
                DeviceTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DeviceTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DeviceTypeEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => DeviceTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTypeEnumIncludeObjectSchema.optional()),
        where: DeviceTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTypeEnumOrderByWithRelationInputObjectSchema,
                DeviceTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DeviceTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DeviceTypeEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => DeviceTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTypeEnumIncludeObjectSchema.optional()),
        data: z.union([DeviceTypeEnumCreateInputObjectSchema, DeviceTypeEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([DeviceTypeEnumCreateManyInputObjectSchema, z.array(DeviceTypeEnumCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => DeviceTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTypeEnumIncludeObjectSchema.optional()),
        where: DeviceTypeEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: DeviceTypeEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => DeviceTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTypeEnumIncludeObjectSchema.optional()),
        data: z.union([DeviceTypeEnumUpdateInputObjectSchema, DeviceTypeEnumUncheckedUpdateInputObjectSchema]),
        where: DeviceTypeEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            DeviceTypeEnumUpdateManyMutationInputObjectSchema,
            DeviceTypeEnumUncheckedUpdateManyInputObjectSchema,
        ]),
        where: DeviceTypeEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => DeviceTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => DeviceTypeEnumIncludeObjectSchema.optional()),
        where: DeviceTypeEnumWhereUniqueInputObjectSchema,
        create: z.union([DeviceTypeEnumCreateInputObjectSchema, DeviceTypeEnumUncheckedCreateInputObjectSchema]),
        update: z.union([DeviceTypeEnumUpdateInputObjectSchema, DeviceTypeEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: DeviceTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTypeEnumOrderByWithRelationInputObjectSchema,
                DeviceTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DeviceTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), DeviceTypeEnumCountAggregateInputObjectSchema]).optional(),
        _min: DeviceTypeEnumMinAggregateInputObjectSchema.optional(),
        _max: DeviceTypeEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: DeviceTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTypeEnumOrderByWithAggregationInputObjectSchema,
                DeviceTypeEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: DeviceTypeEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(DeviceTypeEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), DeviceTypeEnumCountAggregateInputObjectSchema]).optional(),
        _min: DeviceTypeEnumMinAggregateInputObjectSchema.optional(),
        _max: DeviceTypeEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: DeviceTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DeviceTypeEnumOrderByWithRelationInputObjectSchema,
                DeviceTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DeviceTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DeviceTypeEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), DeviceTypeEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as DeviceTypeEnumInputSchemaType;
