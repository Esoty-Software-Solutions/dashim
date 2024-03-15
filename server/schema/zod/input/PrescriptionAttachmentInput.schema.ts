/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

import { PrescriptionAttachmentSelectObjectSchema } from '../objects/PrescriptionAttachmentSelect.schema';
import { PrescriptionAttachmentWhereUniqueInputObjectSchema } from '../objects/PrescriptionAttachmentWhereUniqueInput.schema';
import { PrescriptionAttachmentWhereInputObjectSchema } from '../objects/PrescriptionAttachmentWhereInput.schema';
import { PrescriptionAttachmentOrderByWithRelationInputObjectSchema } from '../objects/PrescriptionAttachmentOrderByWithRelationInput.schema';
import { PrescriptionAttachmentScalarFieldEnumSchema } from '../enums/PrescriptionAttachmentScalarFieldEnum.schema';
import { PrescriptionAttachmentCreateInputObjectSchema } from '../objects/PrescriptionAttachmentCreateInput.schema';
import { PrescriptionAttachmentUncheckedCreateInputObjectSchema } from '../objects/PrescriptionAttachmentUncheckedCreateInput.schema';
import { PrescriptionAttachmentCreateManyInputObjectSchema } from '../objects/PrescriptionAttachmentCreateManyInput.schema';
import { PrescriptionAttachmentUpdateInputObjectSchema } from '../objects/PrescriptionAttachmentUpdateInput.schema';
import { PrescriptionAttachmentUncheckedUpdateInputObjectSchema } from '../objects/PrescriptionAttachmentUncheckedUpdateInput.schema';
import { PrescriptionAttachmentUpdateManyMutationInputObjectSchema } from '../objects/PrescriptionAttachmentUpdateManyMutationInput.schema';
import { PrescriptionAttachmentUncheckedUpdateManyInputObjectSchema } from '../objects/PrescriptionAttachmentUncheckedUpdateManyInput.schema';
import { PrescriptionAttachmentCountAggregateInputObjectSchema } from '../objects/PrescriptionAttachmentCountAggregateInput.schema';
import { PrescriptionAttachmentMinAggregateInputObjectSchema } from '../objects/PrescriptionAttachmentMinAggregateInput.schema';
import { PrescriptionAttachmentMaxAggregateInputObjectSchema } from '../objects/PrescriptionAttachmentMaxAggregateInput.schema';
import { PrescriptionAttachmentOrderByWithAggregationInputObjectSchema } from '../objects/PrescriptionAttachmentOrderByWithAggregationInput.schema';
import { PrescriptionAttachmentScalarWhereWithAggregatesInputObjectSchema } from '../objects/PrescriptionAttachmentScalarWhereWithAggregatesInput.schema';

type PrescriptionAttachmentInputSchemaType = {
    findUnique: z.ZodType<Prisma.PrescriptionAttachmentFindUniqueArgs>;
    findFirst: z.ZodType<Prisma.PrescriptionAttachmentFindFirstArgs>;
    findMany: z.ZodType<Prisma.PrescriptionAttachmentFindManyArgs>;
    create: z.ZodType<Prisma.PrescriptionAttachmentCreateArgs>;
    createMany: z.ZodType<Prisma.PrescriptionAttachmentCreateManyArgs>;
    delete: z.ZodType<Prisma.PrescriptionAttachmentDeleteArgs>;
    deleteMany: z.ZodType<Prisma.PrescriptionAttachmentDeleteManyArgs>;
    update: z.ZodType<Prisma.PrescriptionAttachmentUpdateArgs>;
    updateMany: z.ZodType<Prisma.PrescriptionAttachmentUpdateManyArgs>;
    upsert: z.ZodType<Prisma.PrescriptionAttachmentUpsertArgs>;
    aggregate: z.ZodType<Prisma.PrescriptionAttachmentAggregateArgs>;
    groupBy: z.ZodType<Prisma.PrescriptionAttachmentGroupByArgs>;
    count: z.ZodType<Prisma.PrescriptionAttachmentCountArgs>;
};

export const PrescriptionAttachmentInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => PrescriptionAttachmentSelectObjectSchema.optional()),
        where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
    }),
    findFirst: z.object({
        select: z.lazy(() => PrescriptionAttachmentSelectObjectSchema.optional()),
        where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PrescriptionAttachmentOrderByWithRelationInputObjectSchema,
                PrescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(PrescriptionAttachmentScalarFieldEnumSchema).optional(),
    }),
    findMany: z.object({
        select: z.lazy(() => PrescriptionAttachmentSelectObjectSchema.optional()),
        where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PrescriptionAttachmentOrderByWithRelationInputObjectSchema,
                PrescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(PrescriptionAttachmentScalarFieldEnumSchema).optional(),
    }),
    create: z.object({
        select: z.lazy(() => PrescriptionAttachmentSelectObjectSchema.optional()),
        data: z.union([
            PrescriptionAttachmentCreateInputObjectSchema,
            PrescriptionAttachmentUncheckedCreateInputObjectSchema,
        ]),
    }),
    createMany: z.object({
        data: z.union([
            PrescriptionAttachmentCreateManyInputObjectSchema,
            z.array(PrescriptionAttachmentCreateManyInputObjectSchema),
        ]),
    }),
    delete: z.object({
        select: z.lazy(() => PrescriptionAttachmentSelectObjectSchema.optional()),
        where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
    }),
    deleteMany: z.object({ where: PrescriptionAttachmentWhereInputObjectSchema.optional() }),
    update: z.object({
        select: z.lazy(() => PrescriptionAttachmentSelectObjectSchema.optional()),
        data: z.union([
            PrescriptionAttachmentUpdateInputObjectSchema,
            PrescriptionAttachmentUncheckedUpdateInputObjectSchema,
        ]),
        where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
    }),
    updateMany: z.object({
        data: z.union([
            PrescriptionAttachmentUpdateManyMutationInputObjectSchema,
            PrescriptionAttachmentUncheckedUpdateManyInputObjectSchema,
        ]),
        where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
    }),
    upsert: z.object({
        select: z.lazy(() => PrescriptionAttachmentSelectObjectSchema.optional()),
        where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
        create: z.union([
            PrescriptionAttachmentCreateInputObjectSchema,
            PrescriptionAttachmentUncheckedCreateInputObjectSchema,
        ]),
        update: z.union([
            PrescriptionAttachmentUpdateInputObjectSchema,
            PrescriptionAttachmentUncheckedUpdateInputObjectSchema,
        ]),
    }),
    aggregate: z.object({
        where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PrescriptionAttachmentOrderByWithRelationInputObjectSchema,
                PrescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        _count: z.union([z.literal(true), PrescriptionAttachmentCountAggregateInputObjectSchema]).optional(),
        _min: PrescriptionAttachmentMinAggregateInputObjectSchema.optional(),
        _max: PrescriptionAttachmentMaxAggregateInputObjectSchema.optional(),
    }),
    groupBy: z.object({
        where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PrescriptionAttachmentOrderByWithAggregationInputObjectSchema,
                PrescriptionAttachmentOrderByWithAggregationInputObjectSchema.array(),
            ])
            .optional(),
        having: PrescriptionAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        by: z.array(PrescriptionAttachmentScalarFieldEnumSchema),
        _count: z.union([z.literal(true), PrescriptionAttachmentCountAggregateInputObjectSchema]).optional(),
        _min: PrescriptionAttachmentMinAggregateInputObjectSchema.optional(),
        _max: PrescriptionAttachmentMaxAggregateInputObjectSchema.optional(),
    }),
    count: z.object({
        where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
        orderBy: z
            .union([
                PrescriptionAttachmentOrderByWithRelationInputObjectSchema,
                PrescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
            ])
            .optional(),
        cursor: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.array(PrescriptionAttachmentScalarFieldEnumSchema).optional(),
        select: z.union([z.literal(true), PrescriptionAttachmentCountAggregateInputObjectSchema]).optional(),
    }),
} as PrescriptionAttachmentInputSchemaType;
