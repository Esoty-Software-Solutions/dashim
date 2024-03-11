/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { DiagnosisAttachmentSelectObjectSchema } from '../objects/DiagnosisAttachmentSelect.schema';
import { DiagnosisAttachmentWhereUniqueInputObjectSchema } from '../objects/DiagnosisAttachmentWhereUniqueInput.schema';
import { DiagnosisAttachmentWhereInputObjectSchema } from '../objects/DiagnosisAttachmentWhereInput.schema';
import { DiagnosisAttachmentOrderByWithRelationInputObjectSchema } from '../objects/DiagnosisAttachmentOrderByWithRelationInput.schema';
import { DiagnosisAttachmentScalarFieldEnumSchema } from '../enums/DiagnosisAttachmentScalarFieldEnum.schema';
import { DiagnosisAttachmentCreateInputObjectSchema } from '../objects/DiagnosisAttachmentCreateInput.schema';
import { DiagnosisAttachmentUncheckedCreateInputObjectSchema } from '../objects/DiagnosisAttachmentUncheckedCreateInput.schema';
import { DiagnosisAttachmentCreateManyInputObjectSchema } from '../objects/DiagnosisAttachmentCreateManyInput.schema';
import { DiagnosisAttachmentUpdateInputObjectSchema } from '../objects/DiagnosisAttachmentUpdateInput.schema';
import { DiagnosisAttachmentUncheckedUpdateInputObjectSchema } from '../objects/DiagnosisAttachmentUncheckedUpdateInput.schema';
import { DiagnosisAttachmentUpdateManyMutationInputObjectSchema } from '../objects/DiagnosisAttachmentUpdateManyMutationInput.schema';
import { DiagnosisAttachmentUncheckedUpdateManyInputObjectSchema } from '../objects/DiagnosisAttachmentUncheckedUpdateManyInput.schema';
import { DiagnosisAttachmentCountAggregateInputObjectSchema } from '../objects/DiagnosisAttachmentCountAggregateInput.schema';
import { DiagnosisAttachmentMinAggregateInputObjectSchema } from '../objects/DiagnosisAttachmentMinAggregateInput.schema';
import { DiagnosisAttachmentMaxAggregateInputObjectSchema } from '../objects/DiagnosisAttachmentMaxAggregateInput.schema';
import { DiagnosisAttachmentAvgAggregateInputObjectSchema } from '../objects/DiagnosisAttachmentAvgAggregateInput.schema';
import { DiagnosisAttachmentSumAggregateInputObjectSchema } from '../objects/DiagnosisAttachmentSumAggregateInput.schema';
import { DiagnosisAttachmentOrderByWithAggregationInputObjectSchema } from '../objects/DiagnosisAttachmentOrderByWithAggregationInput.schema';
import { DiagnosisAttachmentScalarWhereWithAggregatesInputObjectSchema } from '../objects/DiagnosisAttachmentScalarWhereWithAggregatesInput.schema';

type DiagnosisAttachmentInputSchemaType = {
    findUnique: z.ZodType<Prisma.DiagnosisAttachmentFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.DiagnosisAttachmentFindFirstArgs>;
    findMany: z.ZodType<Prisma.DiagnosisAttachmentFindManyArgs>;
    create: z.ZodType<Prisma.DiagnosisAttachmentCreateArgs>;
    createMany: z.ZodType<Prisma.DiagnosisAttachmentCreateManyArgs>;
    delete: z.ZodType<Prisma.DiagnosisAttachmentDeleteArgs>;
    deleteMany: z.ZodType<Prisma.DiagnosisAttachmentDeleteManyArgs>;
    update: z.ZodType<Prisma.DiagnosisAttachmentUpdateArgs>;
    updateMany: z.ZodType<Prisma.DiagnosisAttachmentUpdateManyArgs>;
    upsert: z.ZodType<Prisma.DiagnosisAttachmentUpsertArgs>;
    aggregate: z.ZodType<Prisma.DiagnosisAttachmentAggregateArgs>;
    groupBy: z.ZodType<Prisma.DiagnosisAttachmentGroupByArgs>;
    count: z.ZodType<Prisma.DiagnosisAttachmentCountArgs>;
};

export const DiagnosisAttachmentInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => DiagnosisAttachmentSelectObjectSchema.optional()),
        where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => DiagnosisAttachmentSelectObjectSchema.optional()),
        where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
                DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DiagnosisAttachmentScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => DiagnosisAttachmentSelectObjectSchema.optional()),
        where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
                DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DiagnosisAttachmentScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => DiagnosisAttachmentSelectObjectSchema.optional()),
        data: z.union([
            DiagnosisAttachmentCreateInputObjectSchema,
            DiagnosisAttachmentUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            DiagnosisAttachmentCreateManyInputObjectSchema,
            z.array(DiagnosisAttachmentCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => DiagnosisAttachmentSelectObjectSchema.optional()),
        where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: DiagnosisAttachmentWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => DiagnosisAttachmentSelectObjectSchema.optional()),
        data: z.union([
            DiagnosisAttachmentUpdateInputObjectSchema,
            DiagnosisAttachmentUncheckedUpdateInputObjectSchema,
        ]),
        where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            DiagnosisAttachmentUpdateManyMutationInputObjectSchema,
            DiagnosisAttachmentUncheckedUpdateManyInputObjectSchema,
        ]),
        where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => DiagnosisAttachmentSelectObjectSchema.optional()),
        where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
        create: z.union([
            DiagnosisAttachmentCreateInputObjectSchema,
            DiagnosisAttachmentUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            DiagnosisAttachmentUpdateInputObjectSchema,
            DiagnosisAttachmentUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
                DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), DiagnosisAttachmentCountAggregateInputObjectSchema]).optional(),
        _min: DiagnosisAttachmentMinAggregateInputObjectSchema.optional(),
        _max: DiagnosisAttachmentMaxAggregateInputObjectSchema.optional(),
        _avg: DiagnosisAttachmentAvgAggregateInputObjectSchema.optional(),
        _sum: DiagnosisAttachmentSumAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DiagnosisAttachmentOrderByWithAggregationInputObjectSchema,
                DiagnosisAttachmentOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: DiagnosisAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(DiagnosisAttachmentScalarFieldEnumSchema),
        _count: z.union([z.literal(true), DiagnosisAttachmentCountAggregateInputObjectSchema]).optional(),
        _min: DiagnosisAttachmentMinAggregateInputObjectSchema.optional(),
        _max: DiagnosisAttachmentMaxAggregateInputObjectSchema.optional(),
        _avg: DiagnosisAttachmentAvgAggregateInputObjectSchema.optional(),
        _sum: DiagnosisAttachmentSumAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
                DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(DiagnosisAttachmentScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), DiagnosisAttachmentCountAggregateInputObjectSchema]).optional(),
    }),
} as DiagnosisAttachmentInputSchemaType;
