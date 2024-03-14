/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { BeneficiaryEntitySelectObjectSchema } from '../objects/BeneficiaryEntitySelect.schema';
import { BeneficiaryEntityIncludeObjectSchema } from '../objects/BeneficiaryEntityInclude.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from '../objects/BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityWhereInputObjectSchema } from '../objects/BeneficiaryEntityWhereInput.schema';
import { BeneficiaryEntityOrderByWithRelationInputObjectSchema } from '../objects/BeneficiaryEntityOrderByWithRelationInput.schema';
import { BeneficiaryEntityScalarFieldEnumSchema } from '../enums/BeneficiaryEntityScalarFieldEnum.schema';
import { BeneficiaryEntityCreateInputObjectSchema } from '../objects/BeneficiaryEntityCreateInput.schema';
import { BeneficiaryEntityUncheckedCreateInputObjectSchema } from '../objects/BeneficiaryEntityUncheckedCreateInput.schema';
import { BeneficiaryEntityCreateManyInputObjectSchema } from '../objects/BeneficiaryEntityCreateManyInput.schema';
import { BeneficiaryEntityUpdateInputObjectSchema } from '../objects/BeneficiaryEntityUpdateInput.schema';
import { BeneficiaryEntityUncheckedUpdateInputObjectSchema } from '../objects/BeneficiaryEntityUncheckedUpdateInput.schema';
import { BeneficiaryEntityUpdateManyMutationInputObjectSchema } from '../objects/BeneficiaryEntityUpdateManyMutationInput.schema';
import { BeneficiaryEntityUncheckedUpdateManyInputObjectSchema } from '../objects/BeneficiaryEntityUncheckedUpdateManyInput.schema';
import { BeneficiaryEntityCountAggregateInputObjectSchema } from '../objects/BeneficiaryEntityCountAggregateInput.schema';
import { BeneficiaryEntityMinAggregateInputObjectSchema } from '../objects/BeneficiaryEntityMinAggregateInput.schema';
import { BeneficiaryEntityMaxAggregateInputObjectSchema } from '../objects/BeneficiaryEntityMaxAggregateInput.schema';
import { BeneficiaryEntityOrderByWithAggregationInputObjectSchema } from '../objects/BeneficiaryEntityOrderByWithAggregationInput.schema';
import { BeneficiaryEntityScalarWhereWithAggregatesInputObjectSchema } from '../objects/BeneficiaryEntityScalarWhereWithAggregatesInput.schema';

type BeneficiaryEntityInputSchemaType = {
    findUnique: z.ZodType<Prisma.BeneficiaryEntityFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BeneficiaryEntityFindFirstArgs>;
    findMany: z.ZodType<Prisma.BeneficiaryEntityFindManyArgs>;
    create: z.ZodType<Prisma.BeneficiaryEntityCreateArgs>;
    createMany: z.ZodType<Prisma.BeneficiaryEntityCreateManyArgs>;
    delete: z.ZodType<Prisma.BeneficiaryEntityDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BeneficiaryEntityDeleteManyArgs>;
    update: z.ZodType<Prisma.BeneficiaryEntityUpdateArgs>;
    updateMany: z.ZodType<Prisma.BeneficiaryEntityUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BeneficiaryEntityUpsertArgs>;
    aggregate: z.ZodType<Prisma.BeneficiaryEntityAggregateArgs>;
    groupBy: z.ZodType<Prisma.BeneficiaryEntityGroupByArgs>;
    count: z.ZodType<Prisma.BeneficiaryEntityCountArgs>;
};

export const BeneficiaryEntityInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => BeneficiaryEntitySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityIncludeObjectSchema.optional()),
        where: BeneficiaryEntityWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => BeneficiaryEntitySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityIncludeObjectSchema.optional()),
        where: BeneficiaryEntityWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityOrderByWithRelationInputObjectSchema,
                BeneficiaryEntityOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryEntityWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryEntityScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => BeneficiaryEntitySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityIncludeObjectSchema.optional()),
        where: BeneficiaryEntityWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityOrderByWithRelationInputObjectSchema,
                BeneficiaryEntityOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryEntityWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryEntityScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => BeneficiaryEntitySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityIncludeObjectSchema.optional()),
        data: z.union([BeneficiaryEntityCreateInputObjectSchema, BeneficiaryEntityUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([
            BeneficiaryEntityCreateManyInputObjectSchema,
            z.array(BeneficiaryEntityCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => BeneficiaryEntitySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityIncludeObjectSchema.optional()),
        where: BeneficiaryEntityWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: BeneficiaryEntityWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => BeneficiaryEntitySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityIncludeObjectSchema.optional()),
        data: z.union([BeneficiaryEntityUpdateInputObjectSchema, BeneficiaryEntityUncheckedUpdateInputObjectSchema]),
        where: BeneficiaryEntityWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            BeneficiaryEntityUpdateManyMutationInputObjectSchema,
            BeneficiaryEntityUncheckedUpdateManyInputObjectSchema,
        ]),
        where: BeneficiaryEntityWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => BeneficiaryEntitySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityIncludeObjectSchema.optional()),
        where: BeneficiaryEntityWhereUniqueInputObjectSchema,
        create: z.union([BeneficiaryEntityCreateInputObjectSchema, BeneficiaryEntityUncheckedCreateInputObjectSchema]),
        update: z.union([BeneficiaryEntityUpdateInputObjectSchema, BeneficiaryEntityUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: BeneficiaryEntityWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityOrderByWithRelationInputObjectSchema,
                BeneficiaryEntityOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryEntityWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), BeneficiaryEntityCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryEntityMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryEntityMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: BeneficiaryEntityWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityOrderByWithAggregationInputObjectSchema,
                BeneficiaryEntityOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: BeneficiaryEntityScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(BeneficiaryEntityScalarFieldEnumSchema),
        _count: z.union([z.literal(true), BeneficiaryEntityCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryEntityMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryEntityMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: BeneficiaryEntityWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityOrderByWithRelationInputObjectSchema,
                BeneficiaryEntityOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryEntityWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryEntityScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), BeneficiaryEntityCountAggregateInputObjectSchema]).optional(),
    }),
} as BeneficiaryEntityInputSchemaType;
