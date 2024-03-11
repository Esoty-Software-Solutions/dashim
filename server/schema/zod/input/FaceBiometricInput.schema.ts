/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { FaceBiometricSelectObjectSchema } from '../objects/FaceBiometricSelect.schema';
import { FaceBiometricIncludeObjectSchema } from '../objects/FaceBiometricInclude.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from '../objects/FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricWhereInputObjectSchema } from '../objects/FaceBiometricWhereInput.schema';
import { FaceBiometricOrderByWithRelationInputObjectSchema } from '../objects/FaceBiometricOrderByWithRelationInput.schema';
import { FaceBiometricScalarFieldEnumSchema } from '../enums/FaceBiometricScalarFieldEnum.schema';
import { FaceBiometricCreateInputObjectSchema } from '../objects/FaceBiometricCreateInput.schema';
import { FaceBiometricUncheckedCreateInputObjectSchema } from '../objects/FaceBiometricUncheckedCreateInput.schema';
import { FaceBiometricCreateManyInputObjectSchema } from '../objects/FaceBiometricCreateManyInput.schema';
import { FaceBiometricUpdateInputObjectSchema } from '../objects/FaceBiometricUpdateInput.schema';
import { FaceBiometricUncheckedUpdateInputObjectSchema } from '../objects/FaceBiometricUncheckedUpdateInput.schema';
import { FaceBiometricUpdateManyMutationInputObjectSchema } from '../objects/FaceBiometricUpdateManyMutationInput.schema';
import { FaceBiometricUncheckedUpdateManyInputObjectSchema } from '../objects/FaceBiometricUncheckedUpdateManyInput.schema';
import { FaceBiometricCountAggregateInputObjectSchema } from '../objects/FaceBiometricCountAggregateInput.schema';
import { FaceBiometricMinAggregateInputObjectSchema } from '../objects/FaceBiometricMinAggregateInput.schema';
import { FaceBiometricMaxAggregateInputObjectSchema } from '../objects/FaceBiometricMaxAggregateInput.schema';
import { FaceBiometricOrderByWithAggregationInputObjectSchema } from '../objects/FaceBiometricOrderByWithAggregationInput.schema';
import { FaceBiometricScalarWhereWithAggregatesInputObjectSchema } from '../objects/FaceBiometricScalarWhereWithAggregatesInput.schema';

type FaceBiometricInputSchemaType = {
    findUnique: z.ZodType<Prisma.FaceBiometricFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.FaceBiometricFindFirstArgs>;
    findMany: z.ZodType<Prisma.FaceBiometricFindManyArgs>;
    create: z.ZodType<Prisma.FaceBiometricCreateArgs>;
    createMany: z.ZodType<Prisma.FaceBiometricCreateManyArgs>;
    delete: z.ZodType<Prisma.FaceBiometricDeleteArgs>;
    deleteMany: z.ZodType<Prisma.FaceBiometricDeleteManyArgs>;
    update: z.ZodType<Prisma.FaceBiometricUpdateArgs>;
    updateMany: z.ZodType<Prisma.FaceBiometricUpdateManyArgs>;
    upsert: z.ZodType<Prisma.FaceBiometricUpsertArgs>;
    aggregate: z.ZodType<Prisma.FaceBiometricAggregateArgs>;
    groupBy: z.ZodType<Prisma.FaceBiometricGroupByArgs>;
    count: z.ZodType<Prisma.FaceBiometricCountArgs>;
};

export const FaceBiometricInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => FaceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FaceBiometricIncludeObjectSchema.optional()),
        where: FaceBiometricWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => FaceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FaceBiometricIncludeObjectSchema.optional()),
        where: FaceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FaceBiometricOrderByWithRelationInputObjectSchema,
                FaceBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FaceBiometricScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => FaceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FaceBiometricIncludeObjectSchema.optional()),
        where: FaceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FaceBiometricOrderByWithRelationInputObjectSchema,
                FaceBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FaceBiometricScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => FaceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FaceBiometricIncludeObjectSchema.optional()),
        data: z.union([FaceBiometricCreateInputObjectSchema, FaceBiometricUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([FaceBiometricCreateManyInputObjectSchema, z.array(FaceBiometricCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => FaceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FaceBiometricIncludeObjectSchema.optional()),
        where: FaceBiometricWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: FaceBiometricWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => FaceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FaceBiometricIncludeObjectSchema.optional()),
        data: z.union([FaceBiometricUpdateInputObjectSchema, FaceBiometricUncheckedUpdateInputObjectSchema]),
        where: FaceBiometricWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            FaceBiometricUpdateManyMutationInputObjectSchema,
            FaceBiometricUncheckedUpdateManyInputObjectSchema,
        ]),
        where: FaceBiometricWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => FaceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => FaceBiometricIncludeObjectSchema.optional()),
        where: FaceBiometricWhereUniqueInputObjectSchema,
        create: z.union([FaceBiometricCreateInputObjectSchema, FaceBiometricUncheckedCreateInputObjectSchema]),
        update: z.union([FaceBiometricUpdateInputObjectSchema, FaceBiometricUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: FaceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FaceBiometricOrderByWithRelationInputObjectSchema,
                FaceBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), FaceBiometricCountAggregateInputObjectSchema]).optional(),
        _min: FaceBiometricMinAggregateInputObjectSchema.optional(),
        _max: FaceBiometricMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: FaceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FaceBiometricOrderByWithAggregationInputObjectSchema,
                FaceBiometricOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: FaceBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(FaceBiometricScalarFieldEnumSchema),
        _count: z.union([z.literal(true), FaceBiometricCountAggregateInputObjectSchema]).optional(),
        _min: FaceBiometricMinAggregateInputObjectSchema.optional(),
        _max: FaceBiometricMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: FaceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                FaceBiometricOrderByWithRelationInputObjectSchema,
                FaceBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: FaceBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(FaceBiometricScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), FaceBiometricCountAggregateInputObjectSchema]).optional(),
    }),
} as FaceBiometricInputSchemaType;
