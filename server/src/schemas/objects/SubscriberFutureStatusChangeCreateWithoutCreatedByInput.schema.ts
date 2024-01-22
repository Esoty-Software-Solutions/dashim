import { z } from 'zod';
import { UserCreateNestedOneWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserCreateNestedOneWithoutSubscriberFutureStatusChangesInput.schema';
import { SubscriberCreateNestedOneWithoutFutureStatusInputObjectSchema } from './SubscriberCreateNestedOneWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateWithoutCreatedByInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      changeDate: z.coerce.date(),
      futureStatus: z.boolean(),
      description: z.string().optional().nullable(),
      UpdatedBy: z
        .lazy(
          () =>
            UserCreateNestedOneWithoutSubscriberFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      subscriber: z.lazy(
        () => SubscriberCreateNestedOneWithoutFutureStatusInputObjectSchema,
      ),
    })
    .strict();

export const SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema =
  Schema;
