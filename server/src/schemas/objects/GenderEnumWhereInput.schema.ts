import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { BeneficiaryListRelationFilterObjectSchema } from './BeneficiaryListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GenderEnumWhereInputObjectSchema),
        z.lazy(() => GenderEnumWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GenderEnumWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GenderEnumWhereInputObjectSchema),
        z.lazy(() => GenderEnumWhereInputObjectSchema).array(),
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
    user: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    beneficiary: z
      .lazy(() => BeneficiaryListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const GenderEnumWhereInputObjectSchema = Schema;
