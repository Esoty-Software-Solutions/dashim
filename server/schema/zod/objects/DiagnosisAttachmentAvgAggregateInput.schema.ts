/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentAvgAggregateInputType>;
export const DiagnosisAttachmentAvgAggregateInputObjectSchema: SchemaType = z
    .object({
        size: z.literal(true).optional(),
    })
    .strict() as SchemaType;
