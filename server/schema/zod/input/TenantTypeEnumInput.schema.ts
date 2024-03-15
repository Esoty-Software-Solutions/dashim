/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { TenantTypeEnumSelectObjectSchema } from '../objects/TenantTypeEnumSelect.schema';
import { TenantTypeEnumIncludeObjectSchema } from '../objects/TenantTypeEnumInclude.schema';
import { TenantTypeEnumWhereUniqueInputObjectSchema } from '../objects/TenantTypeEnumWhereUniqueInput.schema';
import { TenantTypeEnumWhereInputObjectSchema } from '../objects/TenantTypeEnumWhereInput.schema';
import { TenantTypeEnumOrderByWithRelationInputObjectSchema } from '../objects/TenantTypeEnumOrderByWithRelationInput.schema';
import { TenantTypeEnumScalarFieldEnumSchema } from '../enums/TenantTypeEnumScalarFieldEnum.schema';
import { TenantTypeEnumCreateInputObjectSchema } from '../objects/TenantTypeEnumCreateInput.schema';
import { TenantTypeEnumUncheckedCreateInputObjectSchema } from '../objects/TenantTypeEnumUncheckedCreateInput.schema';
import { TenantTypeEnumCreateManyInputObjectSchema } from '../objects/TenantTypeEnumCreateManyInput.schema';
import { TenantTypeEnumUpdateInputObjectSchema } from '../objects/TenantTypeEnumUpdateInput.schema';
import { TenantTypeEnumUncheckedUpdateInputObjectSchema } from '../objects/TenantTypeEnumUncheckedUpdateInput.schema';
import { TenantTypeEnumUpdateManyMutationInputObjectSchema } from '../objects/TenantTypeEnumUpdateManyMutationInput.schema';
import { TenantTypeEnumUncheckedUpdateManyInputObjectSchema } from '../objects/TenantTypeEnumUncheckedUpdateManyInput.schema';
import { TenantTypeEnumCountAggregateInputObjectSchema } from '../objects/TenantTypeEnumCountAggregateInput.schema';
import { TenantTypeEnumMinAggregateInputObjectSchema } from '../objects/TenantTypeEnumMinAggregateInput.schema';
import { TenantTypeEnumMaxAggregateInputObjectSchema } from '../objects/TenantTypeEnumMaxAggregateInput.schema';
import { TenantTypeEnumOrderByWithAggregationInputObjectSchema } from '../objects/TenantTypeEnumOrderByWithAggregationInput.schema';
import { TenantTypeEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/TenantTypeEnumScalarWhereWithAggregatesInput.schema';

type TenantTypeEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.TenantTypeEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.TenantTypeEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.TenantTypeEnumFindManyArgs>;
    create: z.ZodType<Prisma.TenantTypeEnumCreateArgs>;
    createMany: z.ZodType<Prisma.TenantTypeEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.TenantTypeEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.TenantTypeEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.TenantTypeEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.TenantTypeEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.TenantTypeEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.TenantTypeEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.TenantTypeEnumGroupByArgs>;
    count: z.ZodType<Prisma.TenantTypeEnumCountArgs>;
};

export const TenantTypeEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => TenantTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => TenantTypeEnumIncludeObjectSchema.optional()),
        where: TenantTypeEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => TenantTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => TenantTypeEnumIncludeObjectSchema.optional()),
        where: TenantTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantTypeEnumOrderByWithRelationInputObjectSchema,
                TenantTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: TenantTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantTypeEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => TenantTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => TenantTypeEnumIncludeObjectSchema.optional()),
        where: TenantTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantTypeEnumOrderByWithRelationInputObjectSchema,
                TenantTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: TenantTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantTypeEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => TenantTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => TenantTypeEnumIncludeObjectSchema.optional()),
        data: z.union([TenantTypeEnumCreateInputObjectSchema, TenantTypeEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([TenantTypeEnumCreateManyInputObjectSchema, z.array(TenantTypeEnumCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => TenantTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => TenantTypeEnumIncludeObjectSchema.optional()),
        where: TenantTypeEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: TenantTypeEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => TenantTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => TenantTypeEnumIncludeObjectSchema.optional()),
        data: z.union([TenantTypeEnumUpdateInputObjectSchema, TenantTypeEnumUncheckedUpdateInputObjectSchema]),
        where: TenantTypeEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            TenantTypeEnumUpdateManyMutationInputObjectSchema,
            TenantTypeEnumUncheckedUpdateManyInputObjectSchema,
        ]),
        where: TenantTypeEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => TenantTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => TenantTypeEnumIncludeObjectSchema.optional()),
        where: TenantTypeEnumWhereUniqueInputObjectSchema,
        create: z.union([TenantTypeEnumCreateInputObjectSchema, TenantTypeEnumUncheckedCreateInputObjectSchema]),
        update: z.union([TenantTypeEnumUpdateInputObjectSchema, TenantTypeEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: TenantTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantTypeEnumOrderByWithRelationInputObjectSchema,
                TenantTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: TenantTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), TenantTypeEnumCountAggregateInputObjectSchema]).optional(),
        _min: TenantTypeEnumMinAggregateInputObjectSchema.optional(),
        _max: TenantTypeEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: TenantTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantTypeEnumOrderByWithAggregationInputObjectSchema,
                TenantTypeEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: TenantTypeEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(TenantTypeEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), TenantTypeEnumCountAggregateInputObjectSchema]).optional(),
        _min: TenantTypeEnumMinAggregateInputObjectSchema.optional(),
        _max: TenantTypeEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: TenantTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                TenantTypeEnumOrderByWithRelationInputObjectSchema,
                TenantTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: TenantTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(TenantTypeEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), TenantTypeEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as TenantTypeEnumInputSchemaType;
