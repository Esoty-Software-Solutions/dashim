/* eslint-disable */
import { z } from 'zod';
import { PrescriptionAttachmentSelectObjectSchema } from './PrescriptionAttachmentSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PrescriptionAttachmentArgs>;
export const PrescriptionAttachmentArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => PrescriptionAttachmentSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
