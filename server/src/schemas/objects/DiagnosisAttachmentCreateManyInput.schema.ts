import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.DiagnosisAttachmentCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    name: z.string(),
    link: z.string(),
    size: z.number(),
    contentType: z.string(),
    metadata: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
  })
  .strict();

export const DiagnosisAttachmentCreateManyInputObjectSchema = Schema;
