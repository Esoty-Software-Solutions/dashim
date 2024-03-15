/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { MedicalServiceCategorySelectObjectSchema } from '../objects/MedicalServiceCategorySelect.schema';
import { MedicalServiceCategoryIncludeObjectSchema } from '../objects/MedicalServiceCategoryInclude.schema';
import { MedicalServiceCategoryWhereUniqueInputObjectSchema } from '../objects/MedicalServiceCategoryWhereUniqueInput.schema';
import { MedicalServiceCategoryWhereInputObjectSchema } from '../objects/MedicalServiceCategoryWhereInput.schema';
import { MedicalServiceCategoryOrderByWithRelationInputObjectSchema } from '../objects/MedicalServiceCategoryOrderByWithRelationInput.schema';
import { MedicalServiceCategoryScalarFieldEnumSchema } from '../enums/MedicalServiceCategoryScalarFieldEnum.schema';
import { MedicalServiceCategoryCreateInputObjectSchema } from '../objects/MedicalServiceCategoryCreateInput.schema';
import { MedicalServiceCategoryUncheckedCreateInputObjectSchema } from '../objects/MedicalServiceCategoryUncheckedCreateInput.schema';
import { MedicalServiceCategoryCreateManyInputObjectSchema } from '../objects/MedicalServiceCategoryCreateManyInput.schema';
import { MedicalServiceCategoryUpdateInputObjectSchema } from '../objects/MedicalServiceCategoryUpdateInput.schema';
import { MedicalServiceCategoryUncheckedUpdateInputObjectSchema } from '../objects/MedicalServiceCategoryUncheckedUpdateInput.schema';
import { MedicalServiceCategoryUpdateManyMutationInputObjectSchema } from '../objects/MedicalServiceCategoryUpdateManyMutationInput.schema';
import { MedicalServiceCategoryUncheckedUpdateManyInputObjectSchema } from '../objects/MedicalServiceCategoryUncheckedUpdateManyInput.schema';
import { MedicalServiceCategoryCountAggregateInputObjectSchema } from '../objects/MedicalServiceCategoryCountAggregateInput.schema';
import { MedicalServiceCategoryMinAggregateInputObjectSchema } from '../objects/MedicalServiceCategoryMinAggregateInput.schema';
import { MedicalServiceCategoryMaxAggregateInputObjectSchema } from '../objects/MedicalServiceCategoryMaxAggregateInput.schema';
import { MedicalServiceCategoryOrderByWithAggregationInputObjectSchema } from '../objects/MedicalServiceCategoryOrderByWithAggregationInput.schema';
import { MedicalServiceCategoryScalarWhereWithAggregatesInputObjectSchema } from '../objects/MedicalServiceCategoryScalarWhereWithAggregatesInput.schema';

type MedicalServiceCategoryInputSchemaType = {
    findUnique: z.ZodType<Prisma.MedicalServiceCategoryFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.MedicalServiceCategoryFindFirstArgs>;
    findMany: z.ZodType<Prisma.MedicalServiceCategoryFindManyArgs>;
    create: z.ZodType<Prisma.MedicalServiceCategoryCreateArgs>;
    createMany: z.ZodType<Prisma.MedicalServiceCategoryCreateManyArgs>;
    delete: z.ZodType<Prisma.MedicalServiceCategoryDeleteArgs>;
    deleteMany: z.ZodType<Prisma.MedicalServiceCategoryDeleteManyArgs>;
    update: z.ZodType<Prisma.MedicalServiceCategoryUpdateArgs>;
    updateMany: z.ZodType<Prisma.MedicalServiceCategoryUpdateManyArgs>;
    upsert: z.ZodType<Prisma.MedicalServiceCategoryUpsertArgs>;
    aggregate: z.ZodType<Prisma.MedicalServiceCategoryAggregateArgs>;
    groupBy: z.ZodType<Prisma.MedicalServiceCategoryGroupByArgs>;
    count: z.ZodType<Prisma.MedicalServiceCategoryCountArgs>;
};

export const MedicalServiceCategoryInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => MedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceCategoryIncludeObjectSchema.optional()),
        where: MedicalServiceCategoryWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => MedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceCategoryIncludeObjectSchema.optional()),
        where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceCategoryOrderByWithRelationInputObjectSchema,
                MedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalServiceCategoryScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => MedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceCategoryIncludeObjectSchema.optional()),
        where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceCategoryOrderByWithRelationInputObjectSchema,
                MedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalServiceCategoryScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => MedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceCategoryIncludeObjectSchema.optional()),
        data: z.union([
            MedicalServiceCategoryCreateInputObjectSchema,
            MedicalServiceCategoryUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            MedicalServiceCategoryCreateManyInputObjectSchema,
            z.array(MedicalServiceCategoryCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => MedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceCategoryIncludeObjectSchema.optional()),
        where: MedicalServiceCategoryWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: MedicalServiceCategoryWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => MedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceCategoryIncludeObjectSchema.optional()),
        data: z.union([
            MedicalServiceCategoryUpdateInputObjectSchema,
            MedicalServiceCategoryUncheckedUpdateInputObjectSchema,
        ]),
        where: MedicalServiceCategoryWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            MedicalServiceCategoryUpdateManyMutationInputObjectSchema,
            MedicalServiceCategoryUncheckedUpdateManyInputObjectSchema,
        ]),
        where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => MedicalServiceCategorySelectObjectSchema.optional()),
        include: z.lazy(() => MedicalServiceCategoryIncludeObjectSchema.optional()),
        where: MedicalServiceCategoryWhereUniqueInputObjectSchema,
        create: z.union([
            MedicalServiceCategoryCreateInputObjectSchema,
            MedicalServiceCategoryUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            MedicalServiceCategoryUpdateInputObjectSchema,
            MedicalServiceCategoryUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceCategoryOrderByWithRelationInputObjectSchema,
                MedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), MedicalServiceCategoryCountAggregateInputObjectSchema]).optional(),
        _min: MedicalServiceCategoryMinAggregateInputObjectSchema.optional(),
        _max: MedicalServiceCategoryMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceCategoryOrderByWithAggregationInputObjectSchema,
                MedicalServiceCategoryOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: MedicalServiceCategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(MedicalServiceCategoryScalarFieldEnumSchema),
        _count: z.union([z.literal(true), MedicalServiceCategoryCountAggregateInputObjectSchema]).optional(),
        _min: MedicalServiceCategoryMinAggregateInputObjectSchema.optional(),
        _max: MedicalServiceCategoryMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: MedicalServiceCategoryWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                MedicalServiceCategoryOrderByWithRelationInputObjectSchema,
                MedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: MedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(MedicalServiceCategoryScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), MedicalServiceCategoryCountAggregateInputObjectSchema]).optional(),
    }),
} as MedicalServiceCategoryInputSchemaType;
