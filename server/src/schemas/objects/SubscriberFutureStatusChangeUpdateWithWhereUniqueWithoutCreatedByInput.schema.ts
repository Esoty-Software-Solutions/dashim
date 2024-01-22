import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpdateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
