/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentMinAggregateInputType>;
export const DiagnosisAttachmentMinAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        createdAt: z.literal(true).optional(),
        updatedAt: z.literal(true).optional(),
        isPublished: z.literal(true).optional(),
        isSoftDeleted: z.literal(true).optional(),
        name: z.literal(true).optional(),
        link: z.literal(true).optional(),
        size: z.literal(true).optional(),
        contentType: z.literal(true).optional(),
    })
    .strict() as SchemaType;
