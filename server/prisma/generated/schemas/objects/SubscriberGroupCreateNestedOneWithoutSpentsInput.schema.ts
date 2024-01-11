import { z } from 'zod';
import { SubscriberGroupCreateWithoutSpentsInputObjectSchema } from './SubscriberGroupCreateWithoutSpentsInput.schema';
import { SubscriberGroupUncheckedCreateWithoutSpentsInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutSpentsInput.schema';
import { SubscriberGroupCreateOrConnectWithoutSpentsInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutSpentsInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedOneWithoutSpentsInput> =
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
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedOneWithoutSpentsInputObjectSchema =
  Schema;
