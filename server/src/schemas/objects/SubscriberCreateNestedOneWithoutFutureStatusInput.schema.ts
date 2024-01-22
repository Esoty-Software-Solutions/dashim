import { z } from 'zod';
import { SubscriberCreateWithoutFutureStatusInputObjectSchema } from './SubscriberCreateWithoutFutureStatusInput.schema';
import { SubscriberUncheckedCreateWithoutFutureStatusInputObjectSchema } from './SubscriberUncheckedCreateWithoutFutureStatusInput.schema';
import { SubscriberCreateOrConnectWithoutFutureStatusInputObjectSchema } from './SubscriberCreateOrConnectWithoutFutureStatusInput.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateNestedOneWithoutFutureStatusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutFutureStatusInputObjectSchema),
          z.lazy(
            () => SubscriberUncheckedCreateWithoutFutureStatusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => SubscriberCreateOrConnectWithoutFutureStatusInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => SubscriberWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SubscriberCreateNestedOneWithoutFutureStatusInputObjectSchema =
  Schema;
