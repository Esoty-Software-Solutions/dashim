/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { RelationshipEnumSelectObjectSchema } from '../objects/RelationshipEnumSelect.schema';
import { RelationshipEnumIncludeObjectSchema } from '../objects/RelationshipEnumInclude.schema';
import { RelationshipEnumWhereUniqueInputObjectSchema } from '../objects/RelationshipEnumWhereUniqueInput.schema';
import { RelationshipEnumWhereInputObjectSchema } from '../objects/RelationshipEnumWhereInput.schema';
import { RelationshipEnumOrderByWithRelationInputObjectSchema } from '../objects/RelationshipEnumOrderByWithRelationInput.schema';
import { RelationshipEnumScalarFieldEnumSchema } from '../enums/RelationshipEnumScalarFieldEnum.schema';
import { RelationshipEnumCreateInputObjectSchema } from '../objects/RelationshipEnumCreateInput.schema';
import { RelationshipEnumUncheckedCreateInputObjectSchema } from '../objects/RelationshipEnumUncheckedCreateInput.schema';
import { RelationshipEnumCreateManyInputObjectSchema } from '../objects/RelationshipEnumCreateManyInput.schema';
import { RelationshipEnumUpdateInputObjectSchema } from '../objects/RelationshipEnumUpdateInput.schema';
import { RelationshipEnumUncheckedUpdateInputObjectSchema } from '../objects/RelationshipEnumUncheckedUpdateInput.schema';
import { RelationshipEnumUpdateManyMutationInputObjectSchema } from '../objects/RelationshipEnumUpdateManyMutationInput.schema';
import { RelationshipEnumUncheckedUpdateManyInputObjectSchema } from '../objects/RelationshipEnumUncheckedUpdateManyInput.schema';
import { RelationshipEnumCountAggregateInputObjectSchema } from '../objects/RelationshipEnumCountAggregateInput.schema';
import { RelationshipEnumMinAggregateInputObjectSchema } from '../objects/RelationshipEnumMinAggregateInput.schema';
import { RelationshipEnumMaxAggregateInputObjectSchema } from '../objects/RelationshipEnumMaxAggregateInput.schema';
import { RelationshipEnumOrderByWithAggregationInputObjectSchema } from '../objects/RelationshipEnumOrderByWithAggregationInput.schema';
import { RelationshipEnumScalarWhereWithAggregatesInputObjectSchema } from '../objects/RelationshipEnumScalarWhereWithAggregatesInput.schema';

type RelationshipEnumInputSchemaType = {
    findUnique: z.ZodType<Prisma.RelationshipEnumFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.RelationshipEnumFindFirstArgs>;
    findMany: z.ZodType<Prisma.RelationshipEnumFindManyArgs>;
    create: z.ZodType<Prisma.RelationshipEnumCreateArgs>;
    createMany: z.ZodType<Prisma.RelationshipEnumCreateManyArgs>;
    delete: z.ZodType<Prisma.RelationshipEnumDeleteArgs>;
    deleteMany: z.ZodType<Prisma.RelationshipEnumDeleteManyArgs>;
    update: z.ZodType<Prisma.RelationshipEnumUpdateArgs>;
    updateMany: z.ZodType<Prisma.RelationshipEnumUpdateManyArgs>;
    upsert: z.ZodType<Prisma.RelationshipEnumUpsertArgs>;
    aggregate: z.ZodType<Prisma.RelationshipEnumAggregateArgs>;
    groupBy: z.ZodType<Prisma.RelationshipEnumGroupByArgs>;
    count: z.ZodType<Prisma.RelationshipEnumCountArgs>;
};

export const RelationshipEnumInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => RelationshipEnumSelectObjectSchema.optional()),
        include: z.lazy(() => RelationshipEnumIncludeObjectSchema.optional()),
        where: RelationshipEnumWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => RelationshipEnumSelectObjectSchema.optional()),
        include: z.lazy(() => RelationshipEnumIncludeObjectSchema.optional()),
        where: RelationshipEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                RelationshipEnumOrderByWithRelationInputObjectSchema,
                RelationshipEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: RelationshipEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RelationshipEnumScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => RelationshipEnumSelectObjectSchema.optional()),
        include: z.lazy(() => RelationshipEnumIncludeObjectSchema.optional()),
        where: RelationshipEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                RelationshipEnumOrderByWithRelationInputObjectSchema,
                RelationshipEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: RelationshipEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RelationshipEnumScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => RelationshipEnumSelectObjectSchema.optional()),
        include: z.lazy(() => RelationshipEnumIncludeObjectSchema.optional()),
        data: z.union([RelationshipEnumCreateInputObjectSchema, RelationshipEnumUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([
            RelationshipEnumCreateManyInputObjectSchema,
            z.array(RelationshipEnumCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => RelationshipEnumSelectObjectSchema.optional()),
        include: z.lazy(() => RelationshipEnumIncludeObjectSchema.optional()),
        where: RelationshipEnumWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: RelationshipEnumWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => RelationshipEnumSelectObjectSchema.optional()),
        include: z.lazy(() => RelationshipEnumIncludeObjectSchema.optional()),
        data: z.union([RelationshipEnumUpdateInputObjectSchema, RelationshipEnumUncheckedUpdateInputObjectSchema]),
        where: RelationshipEnumWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            RelationshipEnumUpdateManyMutationInputObjectSchema,
            RelationshipEnumUncheckedUpdateManyInputObjectSchema,
        ]),
        where: RelationshipEnumWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => RelationshipEnumSelectObjectSchema.optional()),
        include: z.lazy(() => RelationshipEnumIncludeObjectSchema.optional()),
        where: RelationshipEnumWhereUniqueInputObjectSchema,
        create: z.union([RelationshipEnumCreateInputObjectSchema, RelationshipEnumUncheckedCreateInputObjectSchema]),
        update: z.union([RelationshipEnumUpdateInputObjectSchema, RelationshipEnumUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: RelationshipEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                RelationshipEnumOrderByWithRelationInputObjectSchema,
                RelationshipEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: RelationshipEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), RelationshipEnumCountAggregateInputObjectSchema]).optional(),
        _min: RelationshipEnumMinAggregateInputObjectSchema.optional(),
        _max: RelationshipEnumMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: RelationshipEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                RelationshipEnumOrderByWithAggregationInputObjectSchema,
                RelationshipEnumOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: RelationshipEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(RelationshipEnumScalarFieldEnumSchema),
        _count: z.union([z.literal(true), RelationshipEnumCountAggregateInputObjectSchema]).optional(),
        _min: RelationshipEnumMinAggregateInputObjectSchema.optional(),
        _max: RelationshipEnumMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: RelationshipEnumWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                RelationshipEnumOrderByWithRelationInputObjectSchema,
                RelationshipEnumOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: RelationshipEnumWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(RelationshipEnumScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), RelationshipEnumCountAggregateInputObjectSchema]).optional(),
    }),
} as RelationshipEnumInputSchemaType;
