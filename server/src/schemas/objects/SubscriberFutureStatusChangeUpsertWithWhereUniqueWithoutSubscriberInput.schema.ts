import { z } from 'zod';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeUpdateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUpdateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUncheckedUpdateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedUpdateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeCreateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(
        () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUpdateWithoutSubscriberInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberFutureStatusChangeUncheckedUpdateWithoutSubscriberInputObjectSchema,
        ),
      ]),
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

export const SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema =
  Schema;
