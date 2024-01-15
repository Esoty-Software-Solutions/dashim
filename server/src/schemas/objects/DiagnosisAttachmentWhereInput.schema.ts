import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiagnosisAttachmentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiagnosisAttachmentWhereInputObjectSchema),
        z.lazy(() => DiagnosisAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiagnosisAttachmentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiagnosisAttachmentWhereInputObjectSchema),
        z.lazy(() => DiagnosisAttachmentWhereInputObjectSchema).array(),
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
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    link: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    size: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    contentType: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    metadata: z.lazy(() => JsonFilterObjectSchema).optional(),
  })
  .strict();

export const DiagnosisAttachmentWhereInputObjectSchema = Schema;
