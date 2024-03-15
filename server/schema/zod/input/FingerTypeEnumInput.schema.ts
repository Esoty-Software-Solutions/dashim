/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { FingerTypeEnumSelectObjectSchema } from '../objects/FingerTypeEnumSelect.schema';
import { FingerTypeEnumIncludeObjectSchema } from '../objects/FingerTypeEnumInclude.schema';
import { FingerTypeEnumWhereUniqueInputObjectSchema } from '../objects/FingerTypeEnumWhereUniqueInput.schema';
import { FingerTypeEnumWhereInputObjectSchema } from '../objects/FingerTypeEnumWhereInput.schema';
import { FingerTypeEnumOrderByWithRelationInputObjectSchema } from '../objects/FingerTypeEnumOrderByWithRelationInput.schema';
import { FingerTypeEnumScalarFieldEnumSchema } from '../enums/FingerTypeEnumScalarFieldEnum.schema';
import { FingerTypeEnumCreateInputObjectSchema } from '../objects/FingerTypeEnumCreateInput.schema';
import { FingerTypeEnumUncheckedCreateInputObjectSchema } from '../objects/FingerTypeEnumUncheckedCreateInput.schema';
import { FingerTypeEnumCreateManyInputObjectSchema } from '../objects/FingerTypeEnumCreateManyInput.schema';
import { FingerTypeEnumUpdateInputObjectSchema } from '../objects/FingerTypeEnumUpdateInput.schema';
import { FingerTypeEnumUncheckedUpdateInputObjectSchema } from '../objects/FingerTypeEnumUncheckedUpdateInput.schema';
import { FingerTypeEnumUpdateManyMutationInputObjectSchema } from '../objects/FingerTypeEnumUpdateManyMutationInput.schema';
import { FingerTypeEnumUncheckedUpdateManyInputObjectSchema } from '../objects/FingerTypeEnumUncheckedUpdateManyInput.schema';
import { FingerTypeEnumCountAggregateInputObjectSchema } from '../objects/FingerTypeEnumCountAggregateInput.schema';
import { FingerTypeEnumMinAggregateInputObjectSchema } from '../objects/FingerTypeEnumMinAggregateInput.schema';
import { FingerTypeEnumMaxAggregateInputObjectSchema } from '../objects/FingerTypeEnumMaxAggregateInput.schema';
import { FingerTypeEnumOrderByWithAggregationInputObjectSchema } from '../objects/FingerTypeEnumOrderByWithAggregationInput.schema';
import { FingerTypeEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/FingerTypeEnumScalarWhereWithAggregatesInput.schema';

type FingerTypeEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.FingerTypeEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.FingerTypeEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.FingerTypeEnumFindManyArgs>;
    create: z.ZodType<Prisma.FingerTypeEnumCreateArgs>;
    createMany: z.ZodType<Prisma.FingerTypeEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.FingerTypeEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.FingerTypeEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.FingerTypeEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.FingerTypeEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.FingerTypeEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.FingerTypeEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.FingerTypeEnumGroupByArgs>;
    count: z.ZodType<Prisma.FingerTypeEnumCountArgs>;
};

export const FingerTypeEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => FingerTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => FingerTypeEnumIncludeObjectSchema.optional()),
        where: FingerTypeEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => FingerTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => FingerTypeEnumIncludeObjectSchema.optional()),
        where: FingerTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerTypeEnumOrderByWithRelationInputObjectSchema,
                FingerTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FingerTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FingerTypeEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => FingerTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => FingerTypeEnumIncludeObjectSchema.optional()),
        where: FingerTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerTypeEnumOrderByWithRelationInputObjectSchema,
                FingerTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FingerTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FingerTypeEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => FingerTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => FingerTypeEnumIncludeObjectSchema.optional()),
        data: z.union([FingerTypeEnumCreateInputObjectSchema, FingerTypeEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([FingerTypeEnumCreateManyInputObjectSchema, z.array(FingerTypeEnumCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => FingerTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => FingerTypeEnumIncludeObjectSchema.optional()),
        where: FingerTypeEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: FingerTypeEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => FingerTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => FingerTypeEnumIncludeObjectSchema.optional()),
        data: z.union([FingerTypeEnumUpdateInputObjectSchema, FingerTypeEnumUncheckedUpdateInputObjectSchema]),
        where: FingerTypeEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            FingerTypeEnumUpdateManyMutationInputObjectSchema,
            FingerTypeEnumUncheckedUpdateManyInputObjectSchema,
        ]),
        where: FingerTypeEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => FingerTypeEnumSelectObjectSchema.optional()),
        include: z.lazy(() => FingerTypeEnumIncludeObjectSchema.optional()),
        where: FingerTypeEnumWhereUniqueInputObjectSchema,
        create: z.union([FingerTypeEnumCreateInputObjectSchema, FingerTypeEnumUncheckedCreateInputObjectSchema]),
        update: z.union([FingerTypeEnumUpdateInputObjectSchema, FingerTypeEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: FingerTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerTypeEnumOrderByWithRelationInputObjectSchema,
                FingerTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FingerTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), FingerTypeEnumCountAggregateInputObjectSchema]).optional(),
        _min: FingerTypeEnumMinAggregateInputObjectSchema.optional(),
        _max: FingerTypeEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: FingerTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerTypeEnumOrderByWithAggregationInputObjectSchema,
                FingerTypeEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: FingerTypeEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(FingerTypeEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), FingerTypeEnumCountAggregateInputObjectSchema]).optional(),
        _min: FingerTypeEnumMinAggregateInputObjectSchema.optional(),
        _max: FingerTypeEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: FingerTypeEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerTypeEnumOrderByWithRelationInputObjectSchema,
                FingerTypeEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FingerTypeEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FingerTypeEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), FingerTypeEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as FingerTypeEnumInputSchemaType;
