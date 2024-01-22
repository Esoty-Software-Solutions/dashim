import { z } from 'zod';
import { SubscriberUpdateWithoutFutureStatusInputObjectSchema } from './SubscriberUpdateWithoutFutureStatusInput.schema';
import { SubscriberUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './SubscriberUncheckedUpdateWithoutFutureStatusInput.schema';
import { SubscriberCreateWithoutFutureStatusInputObjectSchema } from './SubscriberCreateWithoutFutureStatusInput.schema';
import { SubscriberUncheckedCreateWithoutFutureStatusInputObjectSchema } from './SubscriberUncheckedCreateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpsertWithoutFutureStatusInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberUpdateWithoutFutureStatusInputObjectSchema),
      z.lazy(
        () => SubscriberUncheckedUpdateWithoutFutureStatusInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SubscriberCreateWithoutFutureStatusInputObjectSchema),
      z.lazy(
        () => SubscriberUncheckedCreateWithoutFutureStatusInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SubscriberUpsertWithoutFutureStatusInputObjectSchema = Schema;
