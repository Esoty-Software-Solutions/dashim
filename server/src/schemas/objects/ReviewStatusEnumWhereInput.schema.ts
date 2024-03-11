import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ReviewStatusListRelationFilterObjectSchema } from './ReviewStatusListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusEnumWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReviewStatusEnumWhereInputObjectSchema),
        z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReviewStatusEnumWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReviewStatusEnumWhereInputObjectSchema),
        z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).array(),
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
    arabic: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    english: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    transactionBeneficiaryServices: z
      .lazy(() => ReviewStatusListRelationFilterObjectSchema)
      .optional(),
    medicalBeneficiaryServices: z
      .lazy(() => ReviewStatusListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewStatusEnumWhereInputObjectSchema = Schema;
