/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { EntryRecordSelectObjectSchema } from '../objects/EntryRecordSelect.schema';
import { EntryRecordIncludeObjectSchema } from '../objects/EntryRecordInclude.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from '../objects/EntryRecordWhereUniqueInput.schema';
import { EntryRecordWhereInputObjectSchema } from '../objects/EntryRecordWhereInput.schema';
import { EntryRecordOrderByWithRelationInputObjectSchema } from '../objects/EntryRecordOrderByWithRelationInput.schema';
import { EntryRecordScalarFieldEnumSchema } from '../enums/EntryRecordScalarFieldEnum.schema';
import { EntryRecordCreateInputObjectSchema } from '../objects/EntryRecordCreateInput.schema';
import { EntryRecordUncheckedCreateInputObjectSchema } from '../objects/EntryRecordUncheckedCreateInput.schema';
import { EntryRecordCreateManyInputObjectSchema } from '../objects/EntryRecordCreateManyInput.schema';
import { EntryRecordUpdateInputObjectSchema } from '../objects/EntryRecordUpdateInput.schema';
import { EntryRecordUncheckedUpdateInputObjectSchema } from '../objects/EntryRecordUncheckedUpdateInput.schema';
import { EntryRecordUpdateManyMutationInputObjectSchema } from '../objects/EntryRecordUpdateManyMutationInput.schema';
import { EntryRecordUncheckedUpdateManyInputObjectSchema } from '../objects/EntryRecordUncheckedUpdateManyInput.schema';
import { EntryRecordCountAggregateInputObjectSchema } from '../objects/EntryRecordCountAggregateInput.schema';
import { EntryRecordMinAggregateInputObjectSchema } from '../objects/EntryRecordMinAggregateInput.schema';
import { EntryRecordMaxAggregateInputObjectSchema } from '../objects/EntryRecordMaxAggregateInput.schema';
import { EntryRecordOrderByWithAggregationInputObjectSchema } from '../objects/EntryRecordOrderByWithAggregationInput.schema';
import { EntryRecordScalarWhereWithAggregatesInputObjectSchema } from '../objects/EntryRecordScalarWhereWithAggregatesInput.schema';

type EntryRecordInputSchemaType = {
    findUnique: z.ZodType<Prisma.EntryRecordFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.EntryRecordFindFirstArgs>;
    findMany: z.ZodType<Prisma.EntryRecordFindManyArgs>;
    create: z.ZodType<Prisma.EntryRecordCreateArgs>;
    createMany: z.ZodType<Prisma.EntryRecordCreateManyArgs>;
    delete: z.ZodType<Prisma.EntryRecordDeleteArgs>;
    deleteMany: z.ZodType<Prisma.EntryRecordDeleteManyArgs>;
    update: z.ZodType<Prisma.EntryRecordUpdateArgs>;
    updateMany: z.ZodType<Prisma.EntryRecordUpdateManyArgs>;
    upsert: z.ZodType<Prisma.EntryRecordUpsertArgs>;
    aggregate: z.ZodType<Prisma.EntryRecordAggregateArgs>;
    groupBy: z.ZodType<Prisma.EntryRecordGroupByArgs>;
    count: z.ZodType<Prisma.EntryRecordCountArgs>;
};

export const EntryRecordInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => EntryRecordSelectObjectSchema.optional()),
        include: z.lazy(() => EntryRecordIncludeObjectSchema.optional()),
        where: EntryRecordWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => EntryRecordSelectObjectSchema.optional()),
        include: z.lazy(() => EntryRecordIncludeObjectSchema.optional()),
        where: EntryRecordWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                EntryRecordOrderByWithRelationInputObjectSchema,
                EntryRecordOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: EntryRecordWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(EntryRecordScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => EntryRecordSelectObjectSchema.optional()),
        include: z.lazy(() => EntryRecordIncludeObjectSchema.optional()),
        where: EntryRecordWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                EntryRecordOrderByWithRelationInputObjectSchema,
                EntryRecordOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: EntryRecordWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(EntryRecordScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => EntryRecordSelectObjectSchema.optional()),
        include: z.lazy(() => EntryRecordIncludeObjectSchema.optional()),
        data: z.union([EntryRecordCreateInputObjectSchema, EntryRecordUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([EntryRecordCreateManyInputObjectSchema, z.array(EntryRecordCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => EntryRecordSelectObjectSchema.optional()),
        include: z.lazy(() => EntryRecordIncludeObjectSchema.optional()),
        where: EntryRecordWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: EntryRecordWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => EntryRecordSelectObjectSchema.optional()),
        include: z.lazy(() => EntryRecordIncludeObjectSchema.optional()),
        data: z.union([EntryRecordUpdateInputObjectSchema, EntryRecordUncheckedUpdateInputObjectSchema]),
        where: EntryRecordWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            EntryRecordUpdateManyMutationInputObjectSchema,
            EntryRecordUncheckedUpdateManyInputObjectSchema,
        ]),
        where: EntryRecordWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => EntryRecordSelectObjectSchema.optional()),
        include: z.lazy(() => EntryRecordIncludeObjectSchema.optional()),
        where: EntryRecordWhereUniqueInputObjectSchema,
        create: z.union([EntryRecordCreateInputObjectSchema, EntryRecordUncheckedCreateInputObjectSchema]),
        update: z.union([EntryRecordUpdateInputObjectSchema, EntryRecordUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: EntryRecordWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                EntryRecordOrderByWithRelationInputObjectSchema,
                EntryRecordOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: EntryRecordWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), EntryRecordCountAggregateInputObjectSchema]).optional(),
        _min: EntryRecordMinAggregateInputObjectSchema.optional(),
        _max: EntryRecordMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: EntryRecordWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                EntryRecordOrderByWithAggregationInputObjectSchema,
                EntryRecordOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: EntryRecordScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(EntryRecordScalarFieldEnumSchema),
        _count: z.union([z.literal(true), EntryRecordCountAggregateInputObjectSchema]).optional(),
        _min: EntryRecordMinAggregateInputObjectSchema.optional(),
        _max: EntryRecordMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: EntryRecordWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                EntryRecordOrderByWithRelationInputObjectSchema,
                EntryRecordOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: EntryRecordWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(EntryRecordScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), EntryRecordCountAggregateInputObjectSchema]).optional(),
    }),
} as EntryRecordInputSchemaType;
