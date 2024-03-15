/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { FingerprintBiometricSelectObjectSchema } from '../objects/FingerprintBiometricSelect.schema';
import { FingerprintBiometricIncludeObjectSchema } from '../objects/FingerprintBiometricInclude.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from '../objects/FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricWhereInputObjectSchema } from '../objects/FingerprintBiometricWhereInput.schema';
import { FingerprintBiometricOrderByWithRelationInputObjectSchema } from '../objects/FingerprintBiometricOrderByWithRelationInput.schema';
import { FingerprintBiometricScalarFieldEnumSchema } from '../enums/FingerprintBiometricScalarFieldEnum.schema';
import { FingerprintBiometricCreateInputObjectSchema } from '../objects/FingerprintBiometricCreateInput.schema';
import { FingerprintBiometricUncheckedCreateInputObjectSchema } from '../objects/FingerprintBiometricUncheckedCreateInput.schema';
import { FingerprintBiometricCreateManyInputObjectSchema } from '../objects/FingerprintBiometricCreateManyInput.schema';
import { FingerprintBiometricUpdateInputObjectSchema } from '../objects/FingerprintBiometricUpdateInput.schema';
import { FingerprintBiometricUncheckedUpdateInputObjectSchema } from '../objects/FingerprintBiometricUncheckedUpdateInput.schema';
import { FingerprintBiometricUpdateManyMutationInputObjectSchema } from '../objects/FingerprintBiometricUpdateManyMutationInput.schema';
import { FingerprintBiometricUncheckedUpdateManyInputObjectSchema } from '../objects/FingerprintBiometricUncheckedUpdateManyInput.schema';
import { FingerprintBiometricCountAggregateInputObjectSchema } from '../objects/FingerprintBiometricCountAggregateInput.schema';
import { FingerprintBiometricMinAggregateInputObjectSchema } from '../objects/FingerprintBiometricMinAggregateInput.schema';
import { FingerprintBiometricMaxAggregateInputObjectSchema } from '../objects/FingerprintBiometricMaxAggregateInput.schema';
import { FingerprintBiometricOrderByWithAggregationInputObjectSchema } from '../objects/FingerprintBiometricOrderByWithAggregationInput.schema';
import { FingerprintBiometricScalarWhereWithAggregatesInputObjectSchema } from '../objects/FingerprintBiometricScalarWhereWithAggregatesInput.schema';

type FingerprintBiometricInputSchemaType = {
    findUnique: z.ZodType<Prisma.FingerprintBiometricFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.FingerprintBiometricFindFirstArgs>;
    findMany: z.ZodType<Prisma.FingerprintBiometricFindManyArgs>;
    create: z.ZodType<Prisma.FingerprintBiometricCreateArgs>;
    createMany: z.ZodType<Prisma.FingerprintBiometricCreateManyArgs>;
    delete: z.ZodType<Prisma.FingerprintBiometricDeleteArgs>;
    deleteMany: z.ZodType<Prisma.FingerprintBiometricDeleteManyArgs>;
    update: z.ZodType<Prisma.FingerprintBiometricUpdateArgs>;
    updateMany: z.ZodType<Prisma.FingerprintBiometricUpdateManyArgs>;
    upsert: z.ZodType<Prisma.FingerprintBiometricUpsertArgs>;
    aggregate: z.ZodType<Prisma.FingerprintBiometricAggregateArgs>;
    groupBy: z.ZodType<Prisma.FingerprintBiometricGroupByArgs>;
    count: z.ZodType<Prisma.FingerprintBiometricCountArgs>;
};

export const FingerprintBiometricInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => FingerprintBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FingerprintBiometricIncludeObjectSchema.optional()),
        where: FingerprintBiometricWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => FingerprintBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FingerprintBiometricIncludeObjectSchema.optional()),
        where: FingerprintBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerprintBiometricOrderByWithRelationInputObjectSchema,
                FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FingerprintBiometricScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => FingerprintBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FingerprintBiometricIncludeObjectSchema.optional()),
        where: FingerprintBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerprintBiometricOrderByWithRelationInputObjectSchema,
                FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FingerprintBiometricScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => FingerprintBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FingerprintBiometricIncludeObjectSchema.optional()),
        data: z.union([
            FingerprintBiometricCreateInputObjectSchema,
            FingerprintBiometricUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            FingerprintBiometricCreateManyInputObjectSchema,
            z.array(FingerprintBiometricCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => FingerprintBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FingerprintBiometricIncludeObjectSchema.optional()),
        where: FingerprintBiometricWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: FingerprintBiometricWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => FingerprintBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FingerprintBiometricIncludeObjectSchema.optional()),
        data: z.union([
            FingerprintBiometricUpdateInputObjectSchema,
            FingerprintBiometricUncheckedUpdateInputObjectSchema,
        ]),
        where: FingerprintBiometricWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            FingerprintBiometricUpdateManyMutationInputObjectSchema,
            FingerprintBiometricUncheckedUpdateManyInputObjectSchema,
        ]),
        where: FingerprintBiometricWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => FingerprintBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FingerprintBiometricIncludeObjectSchema.optional()),
        where: FingerprintBiometricWhereUniqueInputObjectSchema,
        create: z.union([
            FingerprintBiometricCreateInputObjectSchema,
            FingerprintBiometricUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            FingerprintBiometricUpdateInputObjectSchema,
            FingerprintBiometricUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: FingerprintBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerprintBiometricOrderByWithRelationInputObjectSchema,
                FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), FingerprintBiometricCountAggregateInputObjectSchema]).optional(),
        _min: FingerprintBiometricMinAggregateInputObjectSchema.optional(),
        _max: FingerprintBiometricMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: FingerprintBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerprintBiometricOrderByWithAggregationInputObjectSchema,
                FingerprintBiometricOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: FingerprintBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(FingerprintBiometricScalarFieldEnumSchema),
        _count: z.union([z.literal(true), FingerprintBiometricCountAggregateInputObjectSchema]).optional(),
        _min: FingerprintBiometricMinAggregateInputObjectSchema.optional(),
        _max: FingerprintBiometricMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: FingerprintBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FingerprintBiometricOrderByWithRelationInputObjectSchema,
                FingerprintBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FingerprintBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FingerprintBiometricScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), FingerprintBiometricCountAggregateInputObjectSchema]).optional(),
    }),
} as FingerprintBiometricInputSchemaType;
