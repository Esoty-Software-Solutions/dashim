/* eslint-disable */
import { z } from 'zod';
import { DiagnosisAttachmentSelectObjectSchema } from './DiagnosisAttachmentSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentArgs>;
export const DiagnosisAttachmentArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => DiagnosisAttachmentSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
