/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { BenefitPackageMedicalServiceCategorySelectObjectSchema } from '../objects/BenefitPackageMedicalServiceCategorySelect.schema';
import { BenefitPackageMedicalServiceCategoryIncludeObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryInclude.schema';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryWhereInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryWhereInput.schema';
import { BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryOrderByWithRelationInput.schema';
import { BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema } from '../enums/BenefitPackageMedicalServiceCategoryScalarFieldEnum.schema';
import { BenefitPackageMedicalServiceCategoryCreateInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryCreateInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryUncheckedCreateInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateManyInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryCreateManyInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryUpdateInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryUncheckedUpdateInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryUpdateManyMutationInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateManyInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryUncheckedUpdateManyInput.schema';
import { BenefitPackageMedicalServiceCategoryCountAggregateInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryCountAggregateInput.schema';
import { BenefitPackageMedicalServiceCategoryMinAggregateInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryMinAggregateInput.schema';
import { BenefitPackageMedicalServiceCategoryMaxAggregateInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryMaxAggregateInput.schema';
import { BenefitPackageMedicalServiceCategoryOrderByWithAggregationInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryOrderByWithAggregationInput.schema';
import { BenefitPackageMedicalServiceCategoryScalarWhereWithAggregatesInputObjectSchema } from '../objects/BenefitPackageMedicalServiceCategoryScalarWhereWithAggregatesInput.schema';

type BenefitPackageMedicalServiceCategoryInputSchemaType = {
    findUnique: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryFindFirstArgs>;
    findMany: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryFindManyArgs>;
    create: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateArgs>;
    createMany: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateManyArgs>;
    delete: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryDeleteArgs>;
    deleteMany: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryDeleteManyArgs>;
    update: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateArgs>;
    updateMany: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateManyArgs>;
    upsert: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpsertArgs>;
    aggregate: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryAggregateArgs>;
    groupBy: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryGroupByArgs>;
    count: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCountArgs>;
};

export const BenefitPackageMedicalServiceCategoryInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => BenefitPackageMedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageMedicalServiceCategoryIncludeObjectSchema.optional()),
        where: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => BenefitPackageMedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageMedicalServiceCategoryIncludeObjectSchema.optional()),
        where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema,
                BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => BenefitPackageMedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageMedicalServiceCategoryIncludeObjectSchema.optional()),
        where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema,
                BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => BenefitPackageMedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageMedicalServiceCategoryIncludeObjectSchema.optional()),
        data: z.union([
            BenefitPackageMedicalServiceCategoryCreateInputObjectSchema,
            BenefitPackageMedicalServiceCategoryUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            BenefitPackageMedicalServiceCategoryCreateManyInputObjectSchema,
            z.array(BenefitPackageMedicalServiceCategoryCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => BenefitPackageMedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageMedicalServiceCategoryIncludeObjectSchema.optional()),
        where: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => BenefitPackageMedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageMedicalServiceCategoryIncludeObjectSchema.optional()),
        data: z.union([
            BenefitPackageMedicalServiceCategoryUpdateInputObjectSchema,
            BenefitPackageMedicalServiceCategoryUncheckedUpdateInputObjectSchema,
        ]),
        where: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema,
            BenefitPackageMedicalServiceCategoryUncheckedUpdateManyInputObjectSchema,
        ]),
        where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => BenefitPackageMedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => BenefitPackageMedicalServiceCategoryIncludeObjectSchema.optional()),
        where: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
        create: z.union([
            BenefitPackageMedicalServiceCategoryCreateInputObjectSchema,
            BenefitPackageMedicalServiceCategoryUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            BenefitPackageMedicalServiceCategoryUpdateInputObjectSchema,
            BenefitPackageMedicalServiceCategoryUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema,
                BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z
            .union([z.literal(true), BenefitPackageMedicalServiceCategoryCountAggregateInputObjectSchema])
            .optional(),
        _min: BenefitPackageMedicalServiceCategoryMinAggregateInputObjectSchema.optional(),
        _max: BenefitPackageMedicalServiceCategoryMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageMedicalServiceCategoryOrderByWithAggregationInputObjectSchema,
                BenefitPackageMedicalServiceCategoryOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: BenefitPackageMedicalServiceCategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema),
        _count: z
            .union([z.literal(true), BenefitPackageMedicalServiceCategoryCountAggregateInputObjectSchema])
            .optional(),
        _min: BenefitPackageMedicalServiceCategoryMinAggregateInputObjectSchema.optional(),
        _max: BenefitPackageMedicalServiceCategoryMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema,
                BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema).optional(),
        select: z
            .union([z.literal(true), BenefitPackageMedicalServiceCategoryCountAggregateInputObjectSchema])
            .optional(),
    }),
} as BenefitPackageMedicalServiceCategoryInputSchemaType;
