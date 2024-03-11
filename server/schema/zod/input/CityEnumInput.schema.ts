/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { CityEnumSelectObjectSchema } from '../objects/CityEnumSelect.schema';
import { CityEnumIncludeObjectSchema } from '../objects/CityEnumInclude.schema';
import { CityEnumWhereUniqueInputObjectSchema } from '../objects/CityEnumWhereUniqueInput.schema';
import { CityEnumWhereInputObjectSchema } from '../objects/CityEnumWhereInput.schema';
import { CityEnumOrderByWithRelationInputObjectSchema } from '../objects/CityEnumOrderByWithRelationInput.schema';
import { CityEnumScalarFieldEnumSchema } from '../enums/CityEnumScalarFieldEnum.schema';
import { CityEnumCreateInputObjectSchema } from '../objects/CityEnumCreateInput.schema';
import { CityEnumUncheckedCreateInputObjectSchema } from '../objects/CityEnumUncheckedCreateInput.schema';
import { CityEnumCreateManyInputObjectSchema } from '../objects/CityEnumCreateManyInput.schema';
import { CityEnumUpdateInputObjectSchema } from '../objects/CityEnumUpdateInput.schema';
import { CityEnumUncheckedUpdateInputObjectSchema } from '../objects/CityEnumUncheckedUpdateInput.schema';
import { CityEnumUpdateManyMutationInputObjectSchema } from '../objects/CityEnumUpdateManyMutationInput.schema';
import { CityEnumUncheckedUpdateManyInputObjectSchema } from '../objects/CityEnumUncheckedUpdateManyInput.schema';
import { CityEnumCountAggregateInputObjectSchema } from '../objects/CityEnumCountAggregateInput.schema';
import { CityEnumMinAggregateInputObjectSchema } from '../objects/CityEnumMinAggregateInput.schema';
import { CityEnumMaxAggregateInputObjectSchema } from '../objects/CityEnumMaxAggregateInput.schema';
import { CityEnumOrderByWithAggregationInputObjectSchema } from '../objects/CityEnumOrderByWithAggregationInput.schema';
import { CityEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/CityEnumScalarWhereWithAggregatesInput.schema';

type CityEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.CityEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.CityEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.CityEnumFindManyArgs>;
    create: z.ZodType<Prisma.CityEnumCreateArgs>;
    createMany: z.ZodType<Prisma.CityEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.CityEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.CityEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.CityEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.CityEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.CityEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.CityEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.CityEnumGroupByArgs>;
    count: z.ZodType<Prisma.CityEnumCountArgs>;
};

export const CityEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => CityEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CityEnumIncludeObjectSchema.optional()),
        where: CityEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => CityEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CityEnumIncludeObjectSchema.optional()),
        where: CityEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([CityEnumOrderByWithRelationInputObjectSchema, CityEnumOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: CityEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CityEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => CityEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CityEnumIncludeObjectSchema.optional()),
        where: CityEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([CityEnumOrderByWithRelationInputObjectSchema, CityEnumOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: CityEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CityEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => CityEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CityEnumIncludeObjectSchema.optional()),
        data: z.union([CityEnumCreateInputObjectSchema, CityEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([CityEnumCreateManyInputObjectSchema, z.array(CityEnumCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => CityEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CityEnumIncludeObjectSchema.optional()),
        where: CityEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: CityEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => CityEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CityEnumIncludeObjectSchema.optional()),
        data: z.union([CityEnumUpdateInputObjectSchema, CityEnumUncheckedUpdateInputObjectSchema]),
        where: CityEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([CityEnumUpdateManyMutationInputObjectSchema, CityEnumUncheckedUpdateManyInputObjectSchema]),
        where: CityEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => CityEnumSelectObjectSchema.optional()),
        include: z.lazy(() => CityEnumIncludeObjectSchema.optional()),
        where: CityEnumWhereUniqueInputObjectSchema,
        create: z.union([CityEnumCreateInputObjectSchema, CityEnumUncheckedCreateInputObjectSchema]),
        update: z.union([CityEnumUpdateInputObjectSchema, CityEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: CityEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([CityEnumOrderByWithRelationInputObjectSchema, CityEnumOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: CityEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), CityEnumCountAggregateInputObjectSchema]).optional(),
        _min: CityEnumMinAggregateInputObjectSchema.optional(),
        _max: CityEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: CityEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                CityEnumOrderByWithAggregationInputObjectSchema,
                CityEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: CityEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(CityEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), CityEnumCountAggregateInputObjectSchema]).optional(),
        _min: CityEnumMinAggregateInputObjectSchema.optional(),
        _max: CityEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: CityEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([CityEnumOrderByWithRelationInputObjectSchema, CityEnumOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: CityEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(CityEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), CityEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as CityEnumInputSchemaType;
