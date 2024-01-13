import { z } from 'zod';
import { SubscriberGroupUpdateWithoutSpentsInputObjectSchema } from './SubscriberGroupUpdateWithoutSpentsInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutSpentsInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutSpentsInput.schema';
import { SubscriberGroupCreateWithoutSpentsInputObjectSchema } from './SubscriberGroupCreateWithoutSpentsInput.schema';
import { SubscriberGroupUncheckedCreateWithoutSpentsInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutSpentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithoutSpentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberGroupUpdateWithoutSpentsInputObjectSchema),
      z.lazy(
        () => SubscriberGroupUncheckedUpdateWithoutSpentsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SubscriberGroupCreateWithoutSpentsInputObjectSchema),
      z.lazy(
        () => SubscriberGroupUncheckedCreateWithoutSpentsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SubscriberGroupUpsertWithoutSpentsInputObjectSchema = Schema;
