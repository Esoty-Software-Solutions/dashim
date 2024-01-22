import { z } from 'zod';
import { UserCreateNestedOneWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserCreateNestedOneWithoutSubscriberFutureStatusCreationsInput.schema';
import { SubscriberCreateNestedOneWithoutFutureStatusInputObjectSchema } from './SubscriberCreateNestedOneWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateWithoutUpdatedByInput> =
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
      CreatedBy: z.lazy(
        () =>
          UserCreateNestedOneWithoutSubscriberFutureStatusCreationsInputObjectSchema,
      ),
      subscriber: z.lazy(
        () => SubscriberCreateNestedOneWithoutFutureStatusInputObjectSchema,
      ),
    })
    .strict();

export const SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema =
  Schema;
