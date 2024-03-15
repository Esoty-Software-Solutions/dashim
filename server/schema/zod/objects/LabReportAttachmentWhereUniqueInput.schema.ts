/* eslint-disable */
import { z } from 'zod';
import { LabReportAttachmentWhereInputObjectSchema } from './LabReportAttachmentWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LabReportAttachmentWhereUniqueInput>;
export const LabReportAttachmentWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        AND: z
            .union([
                z.lazy(() => LabReportAttachmentWhereInputObjectSchema),
                z.lazy(() => LabReportAttachmentWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => LabReportAttachmentWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LabReportAttachmentWhereInputObjectSchema),
                z.lazy(() => LabReportAttachmentWhereInputObjectSchema).array(),
            ])
            .optional(),
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    })
    .strict() as SchemaType;
