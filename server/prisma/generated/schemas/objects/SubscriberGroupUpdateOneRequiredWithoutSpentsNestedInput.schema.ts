import { z } from 'zod';
import { SubscriberGroupCreateWithoutSpentsInputObjectSchema } from './SubscriberGroupCreateWithoutSpentsInput.schema';
import { SubscriberGroupUncheckedCreateWithoutSpentsInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutSpentsInput.schema';
import { SubscriberGroupCreateOrConnectWithoutSpentsInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutSpentsInput.schema';
import { SubscriberGroupUpsertWithoutSpentsInputObjectSchema } from './SubscriberGroupUpsertWithoutSpentsInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutSpentsInputObjectSchema } from './SubscriberGroupUpdateWithoutSpentsInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutSpentsInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateOneRequiredWithoutSpentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberGroupCreateWithoutSpentsInputObjectSchema),
          z.lazy(
            () => SubscriberGroupUncheckedCreateWithoutSpentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => SubscriberGroupCreateOrConnectWithoutSpentsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => SubscriberGroupUpsertWithoutSpentsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => SubscriberGroupUpdateWithoutSpentsInputObjectSchema),
          z.lazy(
            () => SubscriberGroupUncheckedUpdateWithoutSpentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupUpdateOneRequiredWithoutSpentsNestedInputObjectSchema =
  Schema;
