import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SubscriberRelationFilterObjectSchema } from './SubscriberRelationFilter.schema';
import { SubscriberWhereInputObjectSchema } from './SubscriberWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SubscriberFutureStatusChangeWhereInputObjectSchema),
        z
          .lazy(() => SubscriberFutureStatusChangeWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SubscriberFutureStatusChangeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SubscriberFutureStatusChangeWhereInputObjectSchema),
        z
          .lazy(() => SubscriberFutureStatusChangeWhereInputObjectSchema)
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
    createdById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updatedById: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    changeDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    futureStatus: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    subscriberId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    CreatedBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    UpdatedBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    subscriber: z
      .union([
        z.lazy(() => SubscriberRelationFilterObjectSchema),
        z.lazy(() => SubscriberWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SubscriberFutureStatusChangeWhereInputObjectSchema = Schema;
