/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentSumAggregateInputType>;
export const DiagnosisAttachmentSumAggregateInputObjectSchema: SchemaType = z
    .object({
        size: z.literal(true).optional(),
    })
    .strict() as SchemaType;
