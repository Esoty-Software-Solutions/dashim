import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeCreateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateOrConnectWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeCreateWithoutSubscriberInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberFutureStatusChangeCreateOrConnectWithoutSubscriberInputObjectSchema =
  Schema;
