import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateOrConnectWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema =
  Schema;
