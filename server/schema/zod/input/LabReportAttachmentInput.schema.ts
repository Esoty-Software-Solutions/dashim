/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { LabReportAttachmentSelectObjectSchema } from '../objects/LabReportAttachmentSelect.schema';
import { LabReportAttachmentWhereUniqueInputObjectSchema } from '../objects/LabReportAttachmentWhereUniqueInput.schema';
import { LabReportAttachmentWhereInputObjectSchema } from '../objects/LabReportAttachmentWhereInput.schema';
import { LabReportAttachmentOrderByWithRelationInputObjectSchema } from '../objects/LabReportAttachmentOrderByWithRelationInput.schema';
import { LabReportAttachmentScalarFieldEnumSchema } from '../enums/LabReportAttachmentScalarFieldEnum.schema';
import { LabReportAttachmentCreateInputObjectSchema } from '../objects/LabReportAttachmentCreateInput.schema';
import { LabReportAttachmentUncheckedCreateInputObjectSchema } from '../objects/LabReportAttachmentUncheckedCreateInput.schema';
import { LabReportAttachmentCreateManyInputObjectSchema } from '../objects/LabReportAttachmentCreateManyInput.schema';
import { LabReportAttachmentUpdateInputObjectSchema } from '../objects/LabReportAttachmentUpdateInput.schema';
import { LabReportAttachmentUncheckedUpdateInputObjectSchema } from '../objects/LabReportAttachmentUncheckedUpdateInput.schema';
import { LabReportAttachmentUpdateManyMutationInputObjectSchema } from '../objects/LabReportAttachmentUpdateManyMutationInput.schema';
import { LabReportAttachmentUncheckedUpdateManyInputObjectSchema } from '../objects/LabReportAttachmentUncheckedUpdateManyInput.schema';
import { LabReportAttachmentCountAggregateInputObjectSchema } from '../objects/LabReportAttachmentCountAggregateInput.schema';
import { LabReportAttachmentMinAggregateInputObjectSchema } from '../objects/LabReportAttachmentMinAggregateInput.schema';
import { LabReportAttachmentMaxAggregateInputObjectSchema } from '../objects/LabReportAttachmentMaxAggregateInput.schema';
import { LabReportAttachmentOrderByWithAggregationInputObjectSchema } from '../objects/LabReportAttachmentOrderByWithAggregationInput.schema';
import { LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema } from '../objects/LabReportAttachmentScalarWhereWithAggregatesInput.schema';

type LabReportAttachmentInputSchemaType = {
    findUnique: z.ZodType<Prisma.LabReportAttachmentFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.LabReportAttachmentFindFirstArgs>;
    findMany: z.ZodType<Prisma.LabReportAttachmentFindManyArgs>;
    create: z.ZodType<Prisma.LabReportAttachmentCreateArgs>;
    createMany: z.ZodType<Prisma.LabReportAttachmentCreateManyArgs>;
    delete: z.ZodType<Prisma.LabReportAttachmentDeleteArgs>;
    deleteMany: z.ZodType<Prisma.LabReportAttachmentDeleteManyArgs>;
    update: z.ZodType<Prisma.LabReportAttachmentUpdateArgs>;
    updateMany: z.ZodType<Prisma.LabReportAttachmentUpdateManyArgs>;
    upsert: z.ZodType<Prisma.LabReportAttachmentUpsertArgs>;
    aggregate: z.ZodType<Prisma.LabReportAttachmentAggregateArgs>;
    groupBy: z.ZodType<Prisma.LabReportAttachmentGroupByArgs>;
    count: z.ZodType<Prisma.LabReportAttachmentCountArgs>;
};

export const LabReportAttachmentInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => LabReportAttachmentSelectObjectSchema.optional()),
        where: LabReportAttachmentWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => LabReportAttachmentSelectObjectSchema.optional()),
        where: LabReportAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                LabReportAttachmentOrderByWithRelationInputObjectSchema,
                LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(LabReportAttachmentScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => LabReportAttachmentSelectObjectSchema.optional()),
        where: LabReportAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                LabReportAttachmentOrderByWithRelationInputObjectSchema,
                LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(LabReportAttachmentScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => LabReportAttachmentSelectObjectSchema.optional()),
        data: z.union([
            LabReportAttachmentCreateInputObjectSchema,
            LabReportAttachmentUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            LabReportAttachmentCreateManyInputObjectSchema,
            z.array(LabReportAttachmentCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => LabReportAttachmentSelectObjectSchema.optional()),
        where: LabReportAttachmentWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: LabReportAttachmentWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => LabReportAttachmentSelectObjectSchema.optional()),
        data: z.union([
            LabReportAttachmentUpdateInputObjectSchema,
            LabReportAttachmentUncheckedUpdateInputObjectSchema,
        ]),
        where: LabReportAttachmentWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            LabReportAttachmentUpdateManyMutationInputObjectSchema,
            LabReportAttachmentUncheckedUpdateManyInputObjectSchema,
        ]),
        where: LabReportAttachmentWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => LabReportAttachmentSelectObjectSchema.optional()),
        where: LabReportAttachmentWhereUniqueInputObjectSchema,
        create: z.union([
            LabReportAttachmentCreateInputObjectSchema,
            LabReportAttachmentUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            LabReportAttachmentUpdateInputObjectSchema,
            LabReportAttachmentUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: LabReportAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                LabReportAttachmentOrderByWithRelationInputObjectSchema,
                LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), LabReportAttachmentCountAggregateInputObjectSchema]).optional(),
        _min: LabReportAttachmentMinAggregateInputObjectSchema.optional(),
        _max: LabReportAttachmentMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: LabReportAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                LabReportAttachmentOrderByWithAggregationInputObjectSchema,
                LabReportAttachmentOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(LabReportAttachmentScalarFieldEnumSchema),
        _count: z.union([z.literal(true), LabReportAttachmentCountAggregateInputObjectSchema]).optional(),
        _min: LabReportAttachmentMinAggregateInputObjectSchema.optional(),
        _max: LabReportAttachmentMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: LabReportAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                LabReportAttachmentOrderByWithRelationInputObjectSchema,
                LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(LabReportAttachmentScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), LabReportAttachmentCountAggregateInputObjectSchema]).optional(),
    }),
} as LabReportAttachmentInputSchemaType;
