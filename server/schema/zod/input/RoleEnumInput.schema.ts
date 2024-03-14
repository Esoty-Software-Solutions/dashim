/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { RoleEnumSelectObjectSchema } from '../objects/RoleEnumSelect.schema';
import { RoleEnumWhereUniqueInputObjectSchema } from '../objects/RoleEnumWhereUniqueInput.schema';
import { RoleEnumWhereInputObjectSchema } from '../objects/RoleEnumWhereInput.schema';
import { RoleEnumOrderByWithRelationInputObjectSchema } from '../objects/RoleEnumOrderByWithRelationInput.schema';
import { RoleEnumScalarFieldEnumSchema } from '../enums/RoleEnumScalarFieldEnum.schema';
import { RoleEnumCreateInputObjectSchema } from '../objects/RoleEnumCreateInput.schema';
import { RoleEnumUncheckedCreateInputObjectSchema } from '../objects/RoleEnumUncheckedCreateInput.schema';
import { RoleEnumCreateManyInputObjectSchema } from '../objects/RoleEnumCreateManyInput.schema';
import { RoleEnumUpdateInputObjectSchema } from '../objects/RoleEnumUpdateInput.schema';
import { RoleEnumUncheckedUpdateInputObjectSchema } from '../objects/RoleEnumUncheckedUpdateInput.schema';
import { RoleEnumUpdateManyMutationInputObjectSchema } from '../objects/RoleEnumUpdateManyMutationInput.schema';
import { RoleEnumUncheckedUpdateManyInputObjectSchema } from '../objects/RoleEnumUncheckedUpdateManyInput.schema';
import { RoleEnumCountAggregateInputObjectSchema } from '../objects/RoleEnumCountAggregateInput.schema';
import { RoleEnumMinAggregateInputObjectSchema } from '../objects/RoleEnumMinAggregateInput.schema';
import { RoleEnumMaxAggregateInputObjectSchema } from '../objects/RoleEnumMaxAggregateInput.schema';
import { RoleEnumOrderByWithAggregationInputObjectSchema } from '../objects/RoleEnumOrderByWithAggregationInput.schema';
import { RoleEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/RoleEnumScalarWhereWithAggregatesInput.schema';

type RoleEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.RoleEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.RoleEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.RoleEnumFindManyArgs>;
    create: z.ZodType<Prisma.RoleEnumCreateArgs>;
    createMany: z.ZodType<Prisma.RoleEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.RoleEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.RoleEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.RoleEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.RoleEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.RoleEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.RoleEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.RoleEnumGroupByArgs>;
    count: z.ZodType<Prisma.RoleEnumCountArgs>;
};

export const RoleEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => RoleEnumSelectObjectSchema.optional()),
        where: RoleEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => RoleEnumSelectObjectSchema.optional()),
        where: RoleEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleEnumOrderByWithRelationInputObjectSchema, RoleEnumOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: RoleEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RoleEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => RoleEnumSelectObjectSchema.optional()),
        where: RoleEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleEnumOrderByWithRelationInputObjectSchema, RoleEnumOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: RoleEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RoleEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => RoleEnumSelectObjectSchema.optional()),
        data: z.union([RoleEnumCreateInputObjectSchema, RoleEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([RoleEnumCreateManyInputObjectSchema, z.array(RoleEnumCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => RoleEnumSelectObjectSchema.optional()),
        where: RoleEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: RoleEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => RoleEnumSelectObjectSchema.optional()),
        data: z.union([RoleEnumUpdateInputObjectSchema, RoleEnumUncheckedUpdateInputObjectSchema]),
        where: RoleEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([RoleEnumUpdateManyMutationInputObjectSchema, RoleEnumUncheckedUpdateManyInputObjectSchema]),
        where: RoleEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => RoleEnumSelectObjectSchema.optional()),
        where: RoleEnumWhereUniqueInputObjectSchema,
        create: z.union([RoleEnumCreateInputObjectSchema, RoleEnumUncheckedCreateInputObjectSchema]),
        update: z.union([RoleEnumUpdateInputObjectSchema, RoleEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: RoleEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleEnumOrderByWithRelationInputObjectSchema, RoleEnumOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: RoleEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), RoleEnumCountAggregateInputObjectSchema]).optional(),
        _min: RoleEnumMinAggregateInputObjectSchema.optional(),
        _max: RoleEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: RoleEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                RoleEnumOrderByWithAggregationInputObjectSchema,
                RoleEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: RoleEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(RoleEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), RoleEnumCountAggregateInputObjectSchema]).optional(),
        _min: RoleEnumMinAggregateInputObjectSchema.optional(),
        _max: RoleEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: RoleEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([RoleEnumOrderByWithRelationInputObjectSchema, RoleEnumOrderByWithRelationInputObjectSchema.array()])
            .optional(),
        cursor: RoleEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RoleEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), RoleEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as RoleEnumInputSchemaType;
