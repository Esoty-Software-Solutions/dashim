import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LabReportAttachmentScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      isPublished: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      isSoftDeleted: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
    })
    .strict();

export const LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema =
  Schema;
