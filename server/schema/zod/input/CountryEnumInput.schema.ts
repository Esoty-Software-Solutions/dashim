/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { CountryEnumSelectObjectSchema } from '../objects/CountryEnumSelect.schema';
import { CountryEnumIncludeObjectSchema } from '../objects/CountryEnumInclude.schema';
import { CountryEnumWhereUniqueInputObjectSchema } from '../objects/CountryEnumWhereUniqueInput.schema';
import { CountryEnumWhereInputObjectSchema } from '../objects/CountryEnumWhereInput.schema';
import { CountryEnumOrderByWithRelationInputObjectSchema } from '../objects/CountryEnumOrderByWithRelationInput.schema';
import { CountryEnumScalarFieldEnumSchema } from '../enums/CountryEnumScalarFieldEnum.schema';
import { CountryEnumCreateInputObjectSchema } from '../objects/CountryEnumCreateInput.schema';
import { CountryEnumUncheckedCreateInputObjectSchema } from '../objects/CountryEnumUncheckedCreateInput.schema';
import { CountryEnumCreateManyInputObjectSchema } from '../objects/CountryEnumCreateManyInput.schema';
import { CountryEnumUpdateInputObjectSchema } from '../objects/CountryEnumUpdateInput.schema';
import { CountryEnumUncheckedUpdateInputObjectSchema } from '../objects/CountryEnumUncheckedUpdateInput.schema';
import { CountryEnumUpdateManyMutationInputObjectSchema } from '../objects/CountryEnumUpdateManyMutationInput.schema';
import { CountryEnumUncheckedUpdateManyInputObjectSchema } from '../objects/CountryEnumUncheckedUpdateManyInput.schema';
import { CountryEnumMinAggregateInputObjectSchema } from '../objects/CountryEnumMinAggregateInput.schema';
import { CountryEnumMaxAggregateInputObjectSchema } from '../objects/CountryEnumMaxAggregateInput.schema';
import { CountryEnumOrderByWithAggregationInputObjectSchema } from '../objects/CountryEnumOrderByWithAggregationInput.schema';
import { CountryEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/CountryEnumScalarWhereWithAggregatesInput.schema';
import { CountryEnumCountAggregateInputObjectSchema } from '../objects/CountryEnumCountAggregateInput.schema';

type CountryEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.CountryEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.CountryEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.CountryEnumFindManyArgs>;
    create: z.ZodType<Prisma.CountryEnumCreateArgs>;
    createMany: z.ZodType<Prisma.CountryEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.CountryEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.CountryEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.CountryEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.CountryEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.CountryEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.CountryEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.CountryEnumGroupByArgs>;
    count: z.ZodType<Prisma.CountryEnumCountArgs>;
};

export const CountryEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => CountryEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CountryEnumIncludeObjectSchema.optional()),
        where: CountryEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => CountryEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CountryEnumIncludeObjectSchema.optional()),
        where: CountryEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CountryEnumOrderByWithRelationInputObjectSchema,
                CountryEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: CountryEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CountryEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => CountryEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CountryEnumIncludeObjectSchema.optional()),
        where: CountryEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CountryEnumOrderByWithRelationInputObjectSchema,
                CountryEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: CountryEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CountryEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => CountryEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CountryEnumIncludeObjectSchema.optional()),
        data: z.union([CountryEnumCreateInputObjectSchema, CountryEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([CountryEnumCreateManyInputObjectSchema, z.array(CountryEnumCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => CountryEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CountryEnumIncludeObjectSchema.optional()),
        where: CountryEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: CountryEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => CountryEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CountryEnumIncludeObjectSchema.optional()),
        data: z.union([CountryEnumUpdateInputObjectSchema, CountryEnumUncheckedUpdateInputObjectSchema]),
        where: CountryEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            CountryEnumUpdateManyMutationInputObjectSchema,
            CountryEnumUncheckedUpdateManyInputObjectSchema,
        ]),
        where: CountryEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => CountryEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CountryEnumIncludeObjectSchema.optional()),
        where: CountryEnumWhereUniqueInputObjectSchema,
        create: z.union([CountryEnumCreateInputObjectSchema, CountryEnumUncheckedCreateInputObjectSchema]),
        update: z.union([CountryEnumUpdateInputObjectSchema, CountryEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: CountryEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CountryEnumOrderByWithRelationInputObjectSchema,
                CountryEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: CountryEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _min: CountryEnumMinAggregateInputObjectSchema.optional(),
        _max: CountryEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: CountryEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CountryEnumOrderByWithAggregationInputObjectSchema,
                CountryEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: CountryEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(CountryEnumScalarFieldEnumSchema),
        _min: CountryEnumMinAggregateInputObjectSchema.optional(),
        _max: CountryEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: CountryEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CountryEnumOrderByWithRelationInputObjectSchema,
                CountryEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: CountryEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CountryEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), CountryEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as CountryEnumInputSchemaType;
