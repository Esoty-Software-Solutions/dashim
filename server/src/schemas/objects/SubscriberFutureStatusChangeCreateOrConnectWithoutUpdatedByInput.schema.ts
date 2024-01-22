import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateOrConnectWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema =
  Schema;
