import { z } from 'zod';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceCreateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
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

export const SubscriberGroupBalanceCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
