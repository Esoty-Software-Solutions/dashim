import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutSpentsInputObjectSchema } from './SubscriberGroupCreateWithoutSpentsInput.schema';
import { SubscriberGroupUncheckedCreateWithoutSpentsInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutSpentsInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutSpentsInputObjectSchema),
        z.lazy(
          () => SubscriberGroupUncheckedCreateWithoutSpentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutSpentsInputObjectSchema =
  Schema;
