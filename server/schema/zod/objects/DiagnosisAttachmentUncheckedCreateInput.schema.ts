/* eslint-disable */
import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())]),
);

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentUncheckedCreateInput>;
export const DiagnosisAttachmentUncheckedCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        name: z.string(),
        link: z.string(),
        size: z.number(),
        contentType: z.string(),
        metadata: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    })
    .strict() as SchemaType;
