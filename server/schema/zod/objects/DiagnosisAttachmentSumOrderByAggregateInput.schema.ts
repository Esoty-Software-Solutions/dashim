/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentSumOrderByAggregateInput>;
export const DiagnosisAttachmentSumOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        size: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
