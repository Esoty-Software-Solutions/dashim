import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.prescriptionAttachmentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => prescriptionAttachmentWhereInputObjectSchema),
        z.lazy(() => prescriptionAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => prescriptionAttachmentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => prescriptionAttachmentWhereInputObjectSchema),
        z.lazy(() => prescriptionAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict();

export const prescriptionAttachmentWhereInputObjectSchema = Schema;
