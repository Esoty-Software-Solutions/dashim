/* eslint-disable */
import { z } from 'zod';
import { DiagnosisAttachmentWhereInputObjectSchema } from './DiagnosisAttachmentWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentWhereUniqueInput>;
export const DiagnosisAttachmentWhereUniqueInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
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
        createdAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.union([z.date(), z.string().datetime().optional()])])
            .optional(),
        isPublished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        isSoftDeleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        link: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        size: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        contentType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        metadata: z.lazy(() => JsonFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
