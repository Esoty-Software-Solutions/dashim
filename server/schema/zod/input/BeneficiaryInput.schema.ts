/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { BeneficiarySelectObjectSchema } from '../objects/BeneficiarySelect.schema';
import { BeneficiaryIncludeObjectSchema } from '../objects/BeneficiaryInclude.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from '../objects/BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryWhereInputObjectSchema } from '../objects/BeneficiaryWhereInput.schema';
import { BeneficiaryOrderByWithRelationInputObjectSchema } from '../objects/BeneficiaryOrderByWithRelationInput.schema';
import { BeneficiaryScalarFieldEnumSchema } from '../enums/BeneficiaryScalarFieldEnum.schema';
import { BeneficiaryCreateInputObjectSchema } from '../objects/BeneficiaryCreateInput.schema';
import { BeneficiaryUncheckedCreateInputObjectSchema } from '../objects/BeneficiaryUncheckedCreateInput.schema';
import { BeneficiaryCreateManyInputObjectSchema } from '../objects/BeneficiaryCreateManyInput.schema';
import { BeneficiaryUpdateInputObjectSchema } from '../objects/BeneficiaryUpdateInput.schema';
import { BeneficiaryUncheckedUpdateInputObjectSchema } from '../objects/BeneficiaryUncheckedUpdateInput.schema';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from '../objects/BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryUncheckedUpdateManyInputObjectSchema } from '../objects/BeneficiaryUncheckedUpdateManyInput.schema';
import { BeneficiaryCountAggregateInputObjectSchema } from '../objects/BeneficiaryCountAggregateInput.schema';
import { BeneficiaryMinAggregateInputObjectSchema } from '../objects/BeneficiaryMinAggregateInput.schema';
import { BeneficiaryMaxAggregateInputObjectSchema } from '../objects/BeneficiaryMaxAggregateInput.schema';
import { BeneficiaryOrderByWithAggregationInputObjectSchema } from '../objects/BeneficiaryOrderByWithAggregationInput.schema';
import { BeneficiaryScalarWhereWithAggregatesInputObjectSchema } from '../objects/BeneficiaryScalarWhereWithAggregatesInput.schema';

type BeneficiaryInputSchemaType = {
    findUnique: z.ZodType<Prisma.BeneficiaryFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BeneficiaryFindFirstArgs>;
    findMany: z.ZodType<Prisma.BeneficiaryFindManyArgs>;
    create: z.ZodType<Prisma.BeneficiaryCreateArgs>;
    createMany: z.ZodType<Prisma.BeneficiaryCreateManyArgs>;
    delete: z.ZodType<Prisma.BeneficiaryDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BeneficiaryDeleteManyArgs>;
    update: z.ZodType<Prisma.BeneficiaryUpdateArgs>;
    updateMany: z.ZodType<Prisma.BeneficiaryUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BeneficiaryUpsertArgs>;
    aggregate: z.ZodType<Prisma.BeneficiaryAggregateArgs>;
    groupBy: z.ZodType<Prisma.BeneficiaryGroupByArgs>;
    count: z.ZodType<Prisma.BeneficiaryCountArgs>;
};

export const BeneficiaryInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => BeneficiarySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryIncludeObjectSchema.optional()),
        where: BeneficiaryWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => BeneficiarySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryIncludeObjectSchema.optional()),
        where: BeneficiaryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryOrderByWithRelationInputObjectSchema,
                BeneficiaryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => BeneficiarySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryIncludeObjectSchema.optional()),
        where: BeneficiaryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryOrderByWithRelationInputObjectSchema,
                BeneficiaryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => BeneficiarySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryIncludeObjectSchema.optional()),
        data: z.union([BeneficiaryCreateInputObjectSchema, BeneficiaryUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([BeneficiaryCreateManyInputObjectSchema, z.array(BeneficiaryCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => BeneficiarySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryIncludeObjectSchema.optional()),
        where: BeneficiaryWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: BeneficiaryWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => BeneficiarySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryIncludeObjectSchema.optional()),
        data: z.union([BeneficiaryUpdateInputObjectSchema, BeneficiaryUncheckedUpdateInputObjectSchema]),
        where: BeneficiaryWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            BeneficiaryUpdateManyMutationInputObjectSchema,
            BeneficiaryUncheckedUpdateManyInputObjectSchema,
        ]),
        where: BeneficiaryWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => BeneficiarySelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryIncludeObjectSchema.optional()),
        where: BeneficiaryWhereUniqueInputObjectSchema,
        create: z.union([BeneficiaryCreateInputObjectSchema, BeneficiaryUncheckedCreateInputObjectSchema]),
        update: z.union([BeneficiaryUpdateInputObjectSchema, BeneficiaryUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: BeneficiaryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryOrderByWithRelationInputObjectSchema,
                BeneficiaryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), BeneficiaryCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: BeneficiaryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryOrderByWithAggregationInputObjectSchema,
                BeneficiaryOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: BeneficiaryScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(BeneficiaryScalarFieldEnumSchema),
        _count: z.union([z.literal(true), BeneficiaryCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: BeneficiaryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryOrderByWithRelationInputObjectSchema,
                BeneficiaryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), BeneficiaryCountAggregateInputObjectSchema]).optional(),
    }),
} as BeneficiaryInputSchemaType;
