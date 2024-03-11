/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentSelect>;
export const DiagnosisAttachmentSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        name: z.boolean().optional(),
        link: z.boolean().optional(),
        size: z.boolean().optional(),
        contentType: z.boolean().optional(),
        metadata: z.boolean().optional(),
    })
    .strict() as SchemaType;
