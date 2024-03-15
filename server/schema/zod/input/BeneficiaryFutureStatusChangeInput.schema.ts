/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { BeneficiaryFutureStatusChangeSelectObjectSchema } from '../objects/BeneficiaryFutureStatusChangeSelect.schema';
import { BeneficiaryFutureStatusChangeIncludeObjectSchema } from '../objects/BeneficiaryFutureStatusChangeInclude.schema';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeWhereInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeWhereInput.schema';
import { BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeOrderByWithRelationInput.schema';
import { BeneficiaryFutureStatusChangeScalarFieldEnumSchema } from '../enums/BeneficiaryFutureStatusChangeScalarFieldEnum.schema';
import { BeneficiaryFutureStatusChangeCreateInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeCreateInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeUncheckedCreateInput.schema';
import { BeneficiaryFutureStatusChangeCreateManyInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeCreateManyInput.schema';
import { BeneficiaryFutureStatusChangeUpdateInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeUpdateInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeUncheckedUpdateInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeUncheckedUpdateManyInput.schema';
import { BeneficiaryFutureStatusChangeCountAggregateInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeCountAggregateInput.schema';
import { BeneficiaryFutureStatusChangeMinAggregateInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeMinAggregateInput.schema';
import { BeneficiaryFutureStatusChangeMaxAggregateInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeMaxAggregateInput.schema';
import { BeneficiaryFutureStatusChangeOrderByWithAggregationInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeOrderByWithAggregationInput.schema';
import { BeneficiaryFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema } from '../objects/BeneficiaryFutureStatusChangeScalarWhereWithAggregatesInput.schema';

type BeneficiaryFutureStatusChangeInputSchemaType = {
    findUnique: z.ZodType<Prisma.BeneficiaryFutureStatusChangeFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BeneficiaryFutureStatusChangeFindFirstArgs>;
    findMany: z.ZodType<Prisma.BeneficiaryFutureStatusChangeFindManyArgs>;
    create: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateArgs>;
    createMany: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateManyArgs>;
    delete: z.ZodType<Prisma.BeneficiaryFutureStatusChangeDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BeneficiaryFutureStatusChangeDeleteManyArgs>;
    update: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateArgs>;
    updateMany: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpsertArgs>;
    aggregate: z.ZodType<Prisma.BeneficiaryFutureStatusChangeAggregateArgs>;
    groupBy: z.ZodType<Prisma.BeneficiaryFutureStatusChangeGroupByArgs>;
    count: z.ZodType<Prisma.BeneficiaryFutureStatusChangeCountArgs>;
};

export const BeneficiaryFutureStatusChangeInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => BeneficiaryFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => BeneficiaryFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema,
                BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryFutureStatusChangeScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => BeneficiaryFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema,
                BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryFutureStatusChangeScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => BeneficiaryFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryFutureStatusChangeIncludeObjectSchema.optional()),
        data: z.union([
            BeneficiaryFutureStatusChangeCreateInputObjectSchema,
            BeneficiaryFutureStatusChangeUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            BeneficiaryFutureStatusChangeCreateManyInputObjectSchema,
            z.array(BeneficiaryFutureStatusChangeCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => BeneficiaryFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => BeneficiaryFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryFutureStatusChangeIncludeObjectSchema.optional()),
        data: z.union([
            BeneficiaryFutureStatusChangeUpdateInputObjectSchema,
            BeneficiaryFutureStatusChangeUncheckedUpdateInputObjectSchema,
        ]),
        where: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema,
            BeneficiaryFutureStatusChangeUncheckedUpdateManyInputObjectSchema,
        ]),
        where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => BeneficiaryFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
        create: z.union([
            BeneficiaryFutureStatusChangeCreateInputObjectSchema,
            BeneficiaryFutureStatusChangeUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            BeneficiaryFutureStatusChangeUpdateInputObjectSchema,
            BeneficiaryFutureStatusChangeUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema,
                BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), BeneficiaryFutureStatusChangeCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryFutureStatusChangeMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryFutureStatusChangeMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryFutureStatusChangeOrderByWithAggregationInputObjectSchema,
                BeneficiaryFutureStatusChangeOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: BeneficiaryFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(BeneficiaryFutureStatusChangeScalarFieldEnumSchema),
        _count: z.union([z.literal(true), BeneficiaryFutureStatusChangeCountAggregateInputObjectSchema]).optional(),
        _min: BeneficiaryFutureStatusChangeMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryFutureStatusChangeMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema,
                BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryFutureStatusChangeScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), BeneficiaryFutureStatusChangeCountAggregateInputObjectSchema]).optional(),
    }),
} as BeneficiaryFutureStatusChangeInputSchemaType;
