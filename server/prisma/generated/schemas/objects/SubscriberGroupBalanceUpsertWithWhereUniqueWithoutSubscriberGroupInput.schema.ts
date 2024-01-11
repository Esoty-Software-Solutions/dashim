import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceUpdateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUpdateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceCreateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUpsertWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            SubscriberGroupBalanceUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberGroupBalanceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            SubscriberGroupBalanceCreateWithoutSubscriberGroupInputObjectSchema,
        ),
        z.lazy(
          () =>
            SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupBalanceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
