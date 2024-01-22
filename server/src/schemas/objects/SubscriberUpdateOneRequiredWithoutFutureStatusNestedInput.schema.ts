import { z } from 'zod';
import { SubscriberCreateWithoutFutureStatusInputObjectSchema } from './SubscriberCreateWithoutFutureStatusInput.schema';
import { SubscriberUncheckedCreateWithoutFutureStatusInputObjectSchema } from './SubscriberUncheckedCreateWithoutFutureStatusInput.schema';
import { SubscriberCreateOrConnectWithoutFutureStatusInputObjectSchema } from './SubscriberCreateOrConnectWithoutFutureStatusInput.schema';
import { SubscriberUpsertWithoutFutureStatusInputObjectSchema } from './SubscriberUpsertWithoutFutureStatusInput.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutFutureStatusInputObjectSchema } from './SubscriberUpdateWithoutFutureStatusInput.schema';
import { SubscriberUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './SubscriberUncheckedUpdateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateOneRequiredWithoutFutureStatusNestedInput> =
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
      upsert: z
        .lazy(() => SubscriberUpsertWithoutFutureStatusInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SubscriberWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SubscriberUpdateWithoutFutureStatusInputObjectSchema),
          z.lazy(
            () => SubscriberUncheckedUpdateWithoutFutureStatusInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberUpdateOneRequiredWithoutFutureStatusNestedInputObjectSchema =
  Schema;
