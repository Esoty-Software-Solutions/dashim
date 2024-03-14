/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { IDCardSelectObjectSchema } from '../objects/IDCardSelect.schema';
import { IDCardIncludeObjectSchema } from '../objects/IDCardInclude.schema';
import { IDCardWhereUniqueInputObjectSchema } from '../objects/IDCardWhereUniqueInput.schema';
import { IDCardWhereInputObjectSchema } from '../objects/IDCardWhereInput.schema';
import { IDCardOrderByWithRelationInputObjectSchema } from '../objects/IDCardOrderByWithRelationInput.schema';
import { IDCardScalarFieldEnumSchema } from '../enums/IDCardScalarFieldEnum.schema';
import { IDCardCreateInputObjectSchema } from '../objects/IDCardCreateInput.schema';
import { IDCardUncheckedCreateInputObjectSchema } from '../objects/IDCardUncheckedCreateInput.schema';
import { IDCardCreateManyInputObjectSchema } from '../objects/IDCardCreateManyInput.schema';
import { IDCardUpdateInputObjectSchema } from '../objects/IDCardUpdateInput.schema';
import { IDCardUncheckedUpdateInputObjectSchema } from '../objects/IDCardUncheckedUpdateInput.schema';
import { IDCardUpdateManyMutationInputObjectSchema } from '../objects/IDCardUpdateManyMutationInput.schema';
import { IDCardUncheckedUpdateManyInputObjectSchema } from '../objects/IDCardUncheckedUpdateManyInput.schema';
import { IDCardCountAggregateInputObjectSchema } from '../objects/IDCardCountAggregateInput.schema';
import { IDCardMinAggregateInputObjectSchema } from '../objects/IDCardMinAggregateInput.schema';
import { IDCardMaxAggregateInputObjectSchema } from '../objects/IDCardMaxAggregateInput.schema';
import { IDCardOrderByWithAggregationInputObjectSchema } from '../objects/IDCardOrderByWithAggregationInput.schema';
import { IDCardScalarWhereWithAggregatesInputObjectSchema } from '../objects/IDCardScalarWhereWithAggregatesInput.schema';

type IDCardInputSchemaType = {
    findUnique: z.ZodType<Prisma.IDCardFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.IDCardFindFirstArgs>;
    findMany: z.ZodType<Prisma.IDCardFindManyArgs>;
    create: z.ZodType<Prisma.IDCardCreateArgs>;
    createMany: z.ZodType<Prisma.IDCardCreateManyArgs>;
    delete: z.ZodType<Prisma.IDCardDeleteArgs>;
    deleteMany: z.ZodType<Prisma.IDCardDeleteManyArgs>;
    update: z.ZodType<Prisma.IDCardUpdateArgs>;
    updateMany: z.ZodType<Prisma.IDCardUpdateManyArgs>;
    upsert: z.ZodType<Prisma.IDCardUpsertArgs>;
    aggregate: z.ZodType<Prisma.IDCardAggregateArgs>;
    groupBy: z.ZodType<Prisma.IDCardGroupByArgs>;
    count: z.ZodType<Prisma.IDCardCountArgs>;
};

export const IDCardInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => IDCardSelectObjectSchema.optional()),
        include: z.lazy(() => IDCardIncludeObjectSchema.optional()),
        where: IDCardWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => IDCardSelectObjectSchema.optional()),
        include: z.lazy(() => IDCardIncludeObjectSchema.optional()),
        where: IDCardWhereInputObjectSchema.optional(),
        orderBy: z
            .union([IDCardOrderByWithRelationInputObjectSchema, IDCardOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: IDCardWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(IDCardScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => IDCardSelectObjectSchema.optional()),
        include: z.lazy(() => IDCardIncludeObjectSchema.optional()),
        where: IDCardWhereInputObjectSchema.optional(),
        orderBy: z
            .union([IDCardOrderByWithRelationInputObjectSchema, IDCardOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: IDCardWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(IDCardScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => IDCardSelectObjectSchema.optional()),
        include: z.lazy(() => IDCardIncludeObjectSchema.optional()),
        data: z.union([IDCardCreateInputObjectSchema, IDCardUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([IDCardCreateManyInputObjectSchema, z.array(IDCardCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => IDCardSelectObjectSchema.optional()),
        include: z.lazy(() => IDCardIncludeObjectSchema.optional()),
        where: IDCardWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: IDCardWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => IDCardSelectObjectSchema.optional()),
        include: z.lazy(() => IDCardIncludeObjectSchema.optional()),
        data: z.union([IDCardUpdateInputObjectSchema, IDCardUncheckedUpdateInputObjectSchema]),
        where: IDCardWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([IDCardUpdateManyMutationInputObjectSchema, IDCardUncheckedUpdateManyInputObjectSchema]),
        where: IDCardWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => IDCardSelectObjectSchema.optional()),
        include: z.lazy(() => IDCardIncludeObjectSchema.optional()),
        where: IDCardWhereUniqueInputObjectSchema,
        create: z.union([IDCardCreateInputObjectSchema, IDCardUncheckedCreateInputObjectSchema]),
        update: z.union([IDCardUpdateInputObjectSchema, IDCardUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: IDCardWhereInputObjectSchema.optional(),
        orderBy: z
            .union([IDCardOrderByWithRelationInputObjectSchema, IDCardOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: IDCardWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), IDCardCountAggregateInputObjectSchema]).optional(),
        _min: IDCardMinAggregateInputObjectSchema.optional(),
        _max: IDCardMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: IDCardWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                IDCardOrderByWithAggregationInputObjectSchema,
                IDCardOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: IDCardScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(IDCardScalarFieldEnumSchema),
        _count: z.union([z.literal(true), IDCardCountAggregateInputObjectSchema]).optional(),
        _min: IDCardMinAggregateInputObjectSchema.optional(),
        _max: IDCardMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: IDCardWhereInputObjectSchema.optional(),
        orderBy: z
            .union([IDCardOrderByWithRelationInputObjectSchema, IDCardOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: IDCardWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(IDCardScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), IDCardCountAggregateInputObjectSchema]).optional(),
    }),
} as IDCardInputSchemaType;
