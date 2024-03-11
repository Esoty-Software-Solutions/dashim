/* eslint-disable */
import { z } from 'zod';
import { LabReportAttachmentSelectObjectSchema } from './LabReportAttachmentSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LabReportAttachmentArgs>;
export const LabReportAttachmentArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => LabReportAttachmentSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
