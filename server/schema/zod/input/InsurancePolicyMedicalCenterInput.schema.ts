/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { InsurancePolicyMedicalCenterSelectObjectSchema } from '../objects/InsurancePolicyMedicalCenterSelect.schema';
import { InsurancePolicyMedicalCenterIncludeObjectSchema } from '../objects/InsurancePolicyMedicalCenterInclude.schema';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterWhereInput.schema';
import { InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterOrderByWithRelationInput.schema';
import { InsurancePolicyMedicalCenterScalarFieldEnumSchema } from '../enums/InsurancePolicyMedicalCenterScalarFieldEnum.schema';
import { InsurancePolicyMedicalCenterCreateInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterCreateInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterUncheckedCreateInput.schema';
import { InsurancePolicyMedicalCenterCreateManyInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterCreateManyInput.schema';
import { InsurancePolicyMedicalCenterUpdateInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterUpdateInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterUncheckedUpdateInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateManyInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterUncheckedUpdateManyInput.schema';
import { InsurancePolicyMedicalCenterCountAggregateInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterCountAggregateInput.schema';
import { InsurancePolicyMedicalCenterMinAggregateInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterMinAggregateInput.schema';
import { InsurancePolicyMedicalCenterMaxAggregateInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterMaxAggregateInput.schema';
import { InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterOrderByWithAggregationInput.schema';
import { InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema } from '../objects/InsurancePolicyMedicalCenterScalarWhereWithAggregatesInput.schema';

type InsurancePolicyMedicalCenterInputSchemaType = {
    findUnique: z.ZodType<Prisma.InsurancePolicyMedicalCenterFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.InsurancePolicyMedicalCenterFindFirstArgs>;
    findMany: z.ZodType<Prisma.InsurancePolicyMedicalCenterFindManyArgs>;
    create: z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateArgs>;
    createMany: z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateManyArgs>;
    delete: z.ZodType<Prisma.InsurancePolicyMedicalCenterDeleteArgs>;
    deleteMany: z.ZodType<Prisma.InsurancePolicyMedicalCenterDeleteManyArgs>;
    update: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateArgs>;
    updateMany: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateManyArgs>;
    upsert: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpsertArgs>;
    aggregate: z.ZodType<Prisma.InsurancePolicyMedicalCenterAggregateArgs>;
    groupBy: z.ZodType<Prisma.InsurancePolicyMedicalCenterGroupByArgs>;
    count: z.ZodType<Prisma.InsurancePolicyMedicalCenterCountArgs>;
};

export const InsurancePolicyMedicalCenterInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => InsurancePolicyMedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyMedicalCenterIncludeObjectSchema.optional()),
        where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => InsurancePolicyMedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyMedicalCenterIncludeObjectSchema.optional()),
        where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
                InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InsurancePolicyMedicalCenterScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => InsurancePolicyMedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyMedicalCenterIncludeObjectSchema.optional()),
        where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
                InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InsurancePolicyMedicalCenterScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => InsurancePolicyMedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyMedicalCenterIncludeObjectSchema.optional()),
        data: z.union([
            InsurancePolicyMedicalCenterCreateInputObjectSchema,
            InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            InsurancePolicyMedicalCenterCreateManyInputObjectSchema,
            z.array(InsurancePolicyMedicalCenterCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => InsurancePolicyMedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyMedicalCenterIncludeObjectSchema.optional()),
        where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => InsurancePolicyMedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyMedicalCenterIncludeObjectSchema.optional()),
        data: z.union([
            InsurancePolicyMedicalCenterUpdateInputObjectSchema,
            InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema,
        ]),
        where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema,
            InsurancePolicyMedicalCenterUncheckedUpdateManyInputObjectSchema,
        ]),
        where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => InsurancePolicyMedicalCenterSelectObjectSchema.optional()),
        include: z.lazy(() => InsurancePolicyMedicalCenterIncludeObjectSchema.optional()),
        where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
        create: z.union([
            InsurancePolicyMedicalCenterCreateInputObjectSchema,
            InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            InsurancePolicyMedicalCenterUpdateInputObjectSchema,
            InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
                InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), InsurancePolicyMedicalCenterCountAggregateInputObjectSchema]).optional(),
        _min: InsurancePolicyMedicalCenterMinAggregateInputObjectSchema.optional(),
        _max: InsurancePolicyMedicalCenterMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema,
                InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(InsurancePolicyMedicalCenterScalarFieldEnumSchema),
        _count: z.union([z.literal(true), InsurancePolicyMedicalCenterCountAggregateInputObjectSchema]).optional(),
        _min: InsurancePolicyMedicalCenterMinAggregateInputObjectSchema.optional(),
        _max: InsurancePolicyMedicalCenterMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
                InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(InsurancePolicyMedicalCenterScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), InsurancePolicyMedicalCenterCountAggregateInputObjectSchema]).optional(),
    }),
} as InsurancePolicyMedicalCenterInputSchemaType;
