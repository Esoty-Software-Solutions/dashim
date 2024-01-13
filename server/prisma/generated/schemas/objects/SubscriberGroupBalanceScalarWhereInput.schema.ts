import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema),
        z
          .lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema),
        z
          .lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema)
          .array(),
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
    subscriberGroupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneftiPackageId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    balance: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const SubscriberGroupBalanceScalarWhereInputObjectSchema = Schema;
