/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { VoiceBiometricSelectObjectSchema } from '../objects/VoiceBiometricSelect.schema';
import { VoiceBiometricIncludeObjectSchema } from '../objects/VoiceBiometricInclude.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from '../objects/VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricWhereInputObjectSchema } from '../objects/VoiceBiometricWhereInput.schema';
import { VoiceBiometricOrderByWithRelationInputObjectSchema } from '../objects/VoiceBiometricOrderByWithRelationInput.schema';
import { VoiceBiometricScalarFieldEnumSchema } from '../enums/VoiceBiometricScalarFieldEnum.schema';
import { VoiceBiometricCreateInputObjectSchema } from '../objects/VoiceBiometricCreateInput.schema';
import { VoiceBiometricUncheckedCreateInputObjectSchema } from '../objects/VoiceBiometricUncheckedCreateInput.schema';
import { VoiceBiometricCreateManyInputObjectSchema } from '../objects/VoiceBiometricCreateManyInput.schema';
import { VoiceBiometricUpdateInputObjectSchema } from '../objects/VoiceBiometricUpdateInput.schema';
import { VoiceBiometricUncheckedUpdateInputObjectSchema } from '../objects/VoiceBiometricUncheckedUpdateInput.schema';
import { VoiceBiometricUpdateManyMutationInputObjectSchema } from '../objects/VoiceBiometricUpdateManyMutationInput.schema';
import { VoiceBiometricUncheckedUpdateManyInputObjectSchema } from '../objects/VoiceBiometricUncheckedUpdateManyInput.schema';
import { VoiceBiometricCountAggregateInputObjectSchema } from '../objects/VoiceBiometricCountAggregateInput.schema';
import { VoiceBiometricMinAggregateInputObjectSchema } from '../objects/VoiceBiometricMinAggregateInput.schema';
import { VoiceBiometricMaxAggregateInputObjectSchema } from '../objects/VoiceBiometricMaxAggregateInput.schema';
import { VoiceBiometricOrderByWithAggregationInputObjectSchema } from '../objects/VoiceBiometricOrderByWithAggregationInput.schema';
import { VoiceBiometricScalarWhereWithAggregatesInputObjectSchema } from '../objects/VoiceBiometricScalarWhereWithAggregatesInput.schema';

type VoiceBiometricInputSchemaType = {
    findUnique: z.ZodType<Prisma.VoiceBiometricFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.VoiceBiometricFindFirstArgs>;
    findMany: z.ZodType<Prisma.VoiceBiometricFindManyArgs>;
    create: z.ZodType<Prisma.VoiceBiometricCreateArgs>;
    createMany: z.ZodType<Prisma.VoiceBiometricCreateManyArgs>;
    delete: z.ZodType<Prisma.VoiceBiometricDeleteArgs>;
    deleteMany: z.ZodType<Prisma.VoiceBiometricDeleteManyArgs>;
    update: z.ZodType<Prisma.VoiceBiometricUpdateArgs>;
    updateMany: z.ZodType<Prisma.VoiceBiometricUpdateManyArgs>;
    upsert: z.ZodType<Prisma.VoiceBiometricUpsertArgs>;
    aggregate: z.ZodType<Prisma.VoiceBiometricAggregateArgs>;
    groupBy: z.ZodType<Prisma.VoiceBiometricGroupByArgs>;
    count: z.ZodType<Prisma.VoiceBiometricCountArgs>;
};

export const VoiceBiometricInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => VoiceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => VoiceBiometricIncludeObjectSchema.optional()),
        where: VoiceBiometricWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => VoiceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => VoiceBiometricIncludeObjectSchema.optional()),
        where: VoiceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VoiceBiometricOrderByWithRelationInputObjectSchema,
                VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(VoiceBiometricScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => VoiceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => VoiceBiometricIncludeObjectSchema.optional()),
        where: VoiceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VoiceBiometricOrderByWithRelationInputObjectSchema,
                VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(VoiceBiometricScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => VoiceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => VoiceBiometricIncludeObjectSchema.optional()),
        data: z.union([VoiceBiometricCreateInputObjectSchema, VoiceBiometricUncheckedCreateInputObjectSchema]),
    }),
    createMany: z.object({
        data: z.union([VoiceBiometricCreateManyInputObjectSchema, z.array(VoiceBiometricCreateManyInputObjectSchema)]),
    }),
    delete: z.object({
        select: z.lazy(() => VoiceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => VoiceBiometricIncludeObjectSchema.optional()),
        where: VoiceBiometricWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: VoiceBiometricWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => VoiceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => VoiceBiometricIncludeObjectSchema.optional()),
        data: z.union([VoiceBiometricUpdateInputObjectSchema, VoiceBiometricUncheckedUpdateInputObjectSchema]),
        where: VoiceBiometricWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            VoiceBiometricUpdateManyMutationInputObjectSchema,
            VoiceBiometricUncheckedUpdateManyInputObjectSchema,
        ]),
        where: VoiceBiometricWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => VoiceBiometricSelectObjectSchema.optional()),
        include: z.lazy(() => VoiceBiometricIncludeObjectSchema.optional()),
        where: VoiceBiometricWhereUniqueInputObjectSchema,
        create: z.union([VoiceBiometricCreateInputObjectSchema, VoiceBiometricUncheckedCreateInputObjectSchema]),
        update: z.union([VoiceBiometricUpdateInputObjectSchema, VoiceBiometricUncheckedUpdateInputObjectSchema]),
    }),
    aggregate: z.object({
        where: VoiceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VoiceBiometricOrderByWithRelationInputObjectSchema,
                VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), VoiceBiometricCountAggregateInputObjectSchema]).optional(),
        _min: VoiceBiometricMinAggregateInputObjectSchema.optional(),
        _max: VoiceBiometricMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: VoiceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VoiceBiometricOrderByWithAggregationInputObjectSchema,
                VoiceBiometricOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: VoiceBiometricScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(VoiceBiometricScalarFieldEnumSchema),
        _count: z.union([z.literal(true), VoiceBiometricCountAggregateInputObjectSchema]).optional(),
        _min: VoiceBiometricMinAggregateInputObjectSchema.optional(),
        _max: VoiceBiometricMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: VoiceBiometricWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                VoiceBiometricOrderByWithRelationInputObjectSchema,
                VoiceBiometricOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: VoiceBiometricWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(VoiceBiometricScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), VoiceBiometricCountAggregateInputObjectSchema]).optional(),
    }),
} as VoiceBiometricInputSchemaType;
