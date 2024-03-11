/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { BeneficiaryEntityFutureStatusChangeSelectObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeSelect.schema';
import { BeneficiaryEntityFutureStatusChangeIncludeObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeInclude.schema';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeWhereInput.schema';
import { BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeOrderByWithRelationInput.schema';
import { BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema } from '../enums/BeneficiaryEntityFutureStatusChangeScalarFieldEnum.schema';
import { BeneficiaryEntityFutureStatusChangeCreateInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeCreateInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeUncheckedCreateInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateManyInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeCreateManyInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeUpdateInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeUncheckedUpdateInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyInput.schema';
import { BeneficiaryEntityFutureStatusChangeCountAggregateInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeCountAggregateInput.schema';
import { BeneficiaryEntityFutureStatusChangeMinAggregateInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeMinAggregateInput.schema';
import { BeneficiaryEntityFutureStatusChangeMaxAggregateInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeMaxAggregateInput.schema';
import { BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInput.schema';
import { BeneficiaryEntityFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema } from '../objects/BeneficiaryEntityFutureStatusChangeScalarWhereWithAggregatesInput.schema';

type BeneficiaryEntityFutureStatusChangeInputSchemaType = {
    findUnique: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeFindFirstArgs>;
    findMany: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeFindManyArgs>;
    create: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateArgs>;
    createMany: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateManyArgs>;
    delete: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeDeleteManyArgs>;
    update: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateArgs>;
    updateMany: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpsertArgs>;
    aggregate: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeAggregateArgs>;
    groupBy: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeGroupByArgs>;
    count: z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCountArgs>;
};

export const BeneficiaryEntityFutureStatusChangeInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => BeneficiaryEntityFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => BeneficiaryEntityFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema,
                BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => BeneficiaryEntityFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema,
                BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => BeneficiaryEntityFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityFutureStatusChangeIncludeObjectSchema.optional()),
        data: z.union([
            BeneficiaryEntityFutureStatusChangeCreateInputObjectSchema,
            BeneficiaryEntityFutureStatusChangeUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            BeneficiaryEntityFutureStatusChangeCreateManyInputObjectSchema,
            z.array(BeneficiaryEntityFutureStatusChangeCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => BeneficiaryEntityFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => BeneficiaryEntityFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityFutureStatusChangeIncludeObjectSchema.optional()),
        data: z.union([
            BeneficiaryEntityFutureStatusChangeUpdateInputObjectSchema,
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateInputObjectSchema,
        ]),
        where: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema,
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyInputObjectSchema,
        ]),
        where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => BeneficiaryEntityFutureStatusChangeSelectObjectSchema.optional()),
        include: z.lazy(() => BeneficiaryEntityFutureStatusChangeIncludeObjectSchema.optional()),
        where: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
        create: z.union([
            BeneficiaryEntityFutureStatusChangeCreateInputObjectSchema,
            BeneficiaryEntityFutureStatusChangeUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            BeneficiaryEntityFutureStatusChangeUpdateInputObjectSchema,
            BeneficiaryEntityFutureStatusChangeUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema,
                BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z
            .union([z.literal(true), BeneficiaryEntityFutureStatusChangeCountAggregateInputObjectSchema])
            .optional(),
        _min: BeneficiaryEntityFutureStatusChangeMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryEntityFutureStatusChangeMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInputObjectSchema,
                BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: BeneficiaryEntityFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema),
        _count: z
            .union([z.literal(true), BeneficiaryEntityFutureStatusChangeCountAggregateInputObjectSchema])
            .optional(),
        _min: BeneficiaryEntityFutureStatusChangeMinAggregateInputObjectSchema.optional(),
        _max: BeneficiaryEntityFutureStatusChangeMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema,
                BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema).optional(),
        select: z
            .union([z.literal(true), BeneficiaryEntityFutureStatusChangeCountAggregateInputObjectSchema])
            .optional(),
    }),
} as BeneficiaryEntityFutureStatusChangeInputSchemaType;
