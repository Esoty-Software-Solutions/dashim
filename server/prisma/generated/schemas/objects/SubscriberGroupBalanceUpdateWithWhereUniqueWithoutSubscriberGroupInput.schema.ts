import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceUpdateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUpdateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUpdateWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            SubscriberGroupBalanceUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberGroupBalanceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupBalanceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
