import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FingerprintBiometricListRelationFilterObjectSchema } from './FingerprintBiometricListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeEnumWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FingerTypeEnumWhereInputObjectSchema),
        z.lazy(() => FingerTypeEnumWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FingerTypeEnumWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FingerTypeEnumWhereInputObjectSchema),
        z.lazy(() => FingerTypeEnumWhereInputObjectSchema).array(),
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
    fingerType: z
      .lazy(() => FingerprintBiometricListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const FingerTypeEnumWhereInputObjectSchema = Schema;
