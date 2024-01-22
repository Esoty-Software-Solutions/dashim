import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeUpdateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUpdateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUncheckedUpdateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedUpdateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUpdateWithoutSubscriberInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedUpdateWithoutSubscriberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema =
  Schema;
