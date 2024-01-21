import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberCreateWithoutFutureStatusInputObjectSchema } from './SubscriberCreateWithoutFutureStatusInput.schema';
import { SubscriberUncheckedCreateWithoutFutureStatusInputObjectSchema } from './SubscriberUncheckedCreateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateOrConnectWithoutFutureStatusInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutFutureStatusInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedCreateWithoutFutureStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberCreateOrConnectWithoutFutureStatusInputObjectSchema =
  Schema;
